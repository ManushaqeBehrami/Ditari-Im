import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { 
    AccountDto, 
    AccountFormValues, 
    Grades, 
    GradesDto, 
    Professor, 
    registerProfessor, 
    Student, 
    Subject, 
    User, 
    UserFormValues 
} from "../models/user";
import { store } from "../stores/store";
import { history } from "../..";

// Fake delay
const sleep = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));

// Base URL for API requests
axios.defaults.baseURL = "http://localhost:54635/api";

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// Axios response interceptor for handling API responses
axios.interceptors.response.use(async response => {
    await sleep(1000);
    return response;
}, (error: AxiosError) => {
    if (!error.response) {
        toast.error("Network error - make sure the API is running");
        return Promise.reject(error);
    }
    
    const { data, status, config } = error.response;
    
    if (status === 400) {
        if (config.method === 'get' && (data as any)?.errors?.hasOwnProperty('id')) {
            history.push('/not-found');
        }
        if ((data as any)?.errors) {
            const modalStateErrors: string[] = [];
            for (const key in (data as any).errors) {
                if ((data as any).errors[key]) {
                    modalStateErrors.push(...(data as any).errors[key]);
                }
            }
            throw modalStateErrors.flat();
        } else {
            toast.error(data as string);
        }
    }
    
    if (status === 401) {
        toast.error("Unauthorized");
    } else if (status === 404) {
        history.push("/not-found");
    } else if (status === 500) {
        history.push("/server-error");
    }
    
    return Promise.reject(error);
});

// Helper function to extract response body
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// Common HTTP requests
const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody)
};

// Account requests
const Account = {
    current: () => requests.get<User>("/user"),
    login: (user: UserFormValues) => requests.post<User>("user/login", user),
    register: (user: AccountFormValues) => requests.post<User>("/user/register", user)
};

// Account management requests
const AccountManagement = {
    list: () => requests.get<AccountDto[]>("/user/all"),
    getProfessor: (id: string) => requests.get<Professor>(`/user/prof/${id}`),
    registerProfessor: (user: registerProfessor) => requests.post<void>("/user/register/professor", user),
    delete: (id: string) => axios.delete<void>(`/user/${id}`),
    update: (user: AccountDto) => axios.put<void>(`/user/${user.id}`, user),
    details: (id: string) => requests.get<AccountDto>(`/user/${id}`)
};

// Subject management requests
const SubjectManagement = {
    list: () => requests.get<Subject[]>("/subjects"),
    delete: (id: string) => axios.delete<void>(`/subjects/${id}`),
    details: (id: string) => requests.get<Subject>(`/subjects/${id}`),
    update: (subject: Subject) => axios.put<void>(`/subjects/${subject.id}`, subject),
    create: (subject: Subject) => axios.post<void>("/subjects", subject)
};

// Grades management requests
const GradesManagement = {
    list: () => requests.get<Grades[]>("/gradings"),
    delete: (id: string) => axios.delete<void>(`/gradings/${id}`),
    details: (id: string) => requests.get<Grades>(`/gradings/${id}`),
    update: (grades: Grades) => axios.put<void>(`/gradings/${grades.id}`, grades),
    create: (grades: GradesDto) => axios.post<void>("/gradings", grades),
    byStudent: (studentId: string) => requests.get<Grades[]>(`/gradings/student/${studentId}`)
};

// Student management requests
const Students = {
    list: () => requests.get<Student[]>("/user/all"),
    details: (id: string) => requests.get<Student>(`/user/${id}`),
    delete: (id: string) => axios.delete<void>(`/user/${id}`),
    update: (user: Student) => axios.put<void>(`/user/${user.id}`, user)
};

// Exporting agent
const agent = {
    Account,
    AccountManagement,
    SubjectManagement,
    GradesManagement,
    Students
};

export default agent;