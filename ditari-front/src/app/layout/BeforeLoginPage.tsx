import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import HomePage from './HomePage';

import personi1Image from '../Images/personi1.jpg'
import personi2Image from '../Images/personi2.jpg';
import personi3Image from '../Images/personi3.jpg';
import Headerphoto from '../Images/pngegg.png';
import TeamMeeting from '../Images/team-meeting-1.jpeg';
import OnlineLearning from '../Images/onlinelearning.jpg';


function BeforeLoginPage() {
  return (
    <body>

      <section
        className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
      >
        <div className="container  py-2">
          <div className="d-sm-flex  align-items-center justify-content-between">
            <div>
              <h1>Platforma jonë</h1>
              <p className="lead my-4">
                Do të krijoj një ambient më të lehtë komunikimi mes studentit-prindrit-kujdestartit
                si dhe mësimdhënësve do<br></br> t’iu ofrohet një mënyrë efikase për të vëzhguar dhe vlerësuar drejt dhe lehtë studentët,<br></br> do të mundesoj gjenerimin e raporteve dhe statistikave me lehtësi duke marr për bazë<br></br> faktin se tashmë të dhënat do të jenë të ruajtuara në mënyrë digjitale.
              </p>

            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block  py-4"
              src={Headerphoto}
              alt=""
            />
          </div>
        </div>
      </section>


      <section className="bg-secondary text-center text-light p-5 ">
        <div className="container">
          <div className="text-center justify-content-between align-items-center">
            <h3 className=" mb-3 mb-md-0">Për të shfrytëzuar më shumë <br></br> funksionalitete, ju lutem kyquni apo regjistrohuni!</h3>

          </div>
        </div>
      </section>


      <section className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h3 className="card-title mb-3">Transkripta e suksesit</h3>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" className="btn btn-primary">Lexo më shumë</a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-secondary text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-person-square"> </i>
                  </div>
                  <h3 className="card-title mb-3">Vlersim Digjital</h3>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" className="btn btn-dark">Lexo më shumë</a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-people"></i>
                  </div>
                  <h3 className="card-title mb-3">Monitorim cilesor</h3>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" className="btn btn-primary">Lexo më shumë</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="learn" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src={OnlineLearning} className="img-fluid" alt="" />
            </div>
            <div className="col-md p-5">
              <h2>Vizioni</h2>
              <p className="lead">
                Për sistemin e arsimit në Kosovë duke përfshirë të gjithë akterët kryesor të saj të cilët  ndikohen drejtpërdrejtë nga sistemi tradicional i administrimit të shkollave parauniversitare, digjitalizimi i tij do të reformoj në shkallë të dukshme arsimin në vendin tonë.
              </p>
              <p>

                DitariIm do të menaxhoj dhe kontrolloj procesin dhe zhvillimin arsimor, mbarëvajtjen e mësimit, regjistrimin e të dhënave, ofrimin e literaturës online, evidencën mbi studentët dhe gjithashtu nxjerrjen e dokumenteve online (diplome, vertetim, deftese,etj).
              </p>
              <a href="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Synimet</h2>
              <p className="lead">
                Platforma jonë do të ndryshoj rrënjesisht sistemin arsimor në vendin tonë i cili per vite me radhë është renduar në fund të listave sa i përket cilësisë së arsimit.
              </p>
              <p>
                Digjitazimi i sistemit arsimor do ti mundësoj përdoruesve si nxënësve, prindërve, shkollave komunave, institucionet arsimore, sindikatave, ministrisë së arsimit, ministrisë së ekonimisë gjenerim të të dhënave në mënyrë të hapur dhe transparente.

              </p>
              <a href="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Lexo më shumë
              </a>
            </div>
            <div className="col-md">
              <img
                src={TeamMeeting}
                className="img-fluid"
                alt="" />
            </div>
          </div>
        </div>
      </section>


      <section id="questions" className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion accordion-flush" id="questions">

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                >
                  Where exactly are you located?
                </button>
              </h2>
              <div
                id="question-one"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                  beatae fuga animi distinctio perspiciatis adipisci velit maiores
                  totam tempora accusamus modi explicabo accusantium consequatur,
                  praesentium rem quisquam molestias at quos vero. Officiis ad
                  velit doloremque at. Dignissimos praesentium necessitatibus
                  natus corrupti cum consequatur aliquam! Minima molestias iure
                  quam distinctio velit.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-two"
                >
                  How much does it cost to attend?
                </button>
              </h2>
              <div
                id="question-two"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                  beatae fuga animi distinctio perspiciatis adipisci velit maiores
                  totam tempora accusamus modi explicabo accusantium consequatur,
                  praesentium rem quisquam molestias at quos vero. Officiis ad
                  velit doloremque at. Dignissimos praesentium necessitatibus
                  natus corrupti cum consequatur aliquam! Minima molestias iure
                  quam distinctio velit.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-three"
                >
                  What do I need to Know?
                </button>
              </h2>
              <div
                id="question-three"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                  beatae fuga animi distinctio perspiciatis adipisci velit maiores
                  totam tempora accusamus modi explicabo accusantium consequatur,
                  praesentium rem quisquam molestias at quos vero. Officiis ad
                  velit doloremque at. Dignissimos praesentium necessitatibus
                  natus corrupti cum consequatur aliquam! Minima molestias iure
                  quam distinctio velit.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-four"
                >
                  How Do I sign up?
                </button>
              </h2>
              <div
                id="question-four"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                  beatae fuga animi distinctio perspiciatis adipisci velit maiores
                  totam tempora accusamus modi explicabo accusantium consequatur,
                  praesentium rem quisquam molestias at quos vero. Officiis ad
                  velit doloremque at. Dignissimos praesentium necessitatibus
                  natus corrupti cum consequatur aliquam! Minima molestias iure
                  quam distinctio velit.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-five"
                >
                  Do you help me find a job?
                </button>
              </h2>
              <div
                id="question-five"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                  beatae fuga animi distinctio perspiciatis adipisci velit maiores
                  totam tempora accusamus modi explicabo accusantium consequatur,
                  praesentium rem quisquam molestias at quos vero. Officiis ad
                  velit doloremque at. Dignissimos praesentium necessitatibus
                  natus corrupti cum consequatur aliquam! Minima molestias iure
                  quam distinctio velit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="instructors" className="p-5">
        <div className="container">
          <h2 className="text-center text-white">Ekipa ynë</h2>
          <p className="lead text-center text-white mb-5">
            Një ekip profesioniste dhe me përvojë shumë vjçare!
          </p>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card bg-light">
                <div className="card-body text-center ">
                  <img
                    src={personi2Image}
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Personi 1</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>

                  <a href="https://www.facebook.com/"><i className="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="https://www.linkedin.com/"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                  <a href="https://www.instagram.com/"><i className="bi bi-instagram text-dark mx-1"></i></a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src={personi1Image}
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Personi 2</h3>
                  <p className="card-text">
                    Studente ne kolegjin UBT ne drejtimin shkenca kompjuterike dhe inxhinieri.
                    E psionuar pas fizikes <br></br>dhe astronomis
                  </p>

                  <a href="https://www.facebook.com/"><i className="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="https://www.linkedin.com/"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                  <a href="https://www.instagram.com/"><i className="bi bi-instagram text-dark mx-1"></i></a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src={personi3Image}
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">personi 3</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>

                  <a href="https://www.facebook.com/"><i className="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="https://www.instagram.com/"><i className="bi bi-instagram text-dark mx-1"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="p-5 text-center">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group list-group-flush lead">
                <ul className="py-1">
                  <span className="fw-bold">Main Location:</span> 50 Main st Boston MA
                </ul>
                <ul className="py-1">
                  <span className="fw-bold">Enrollment Phone:</span> (555) 555-5555
                </ul>
                <ul className="py-1">
                  <span className="fw-bold">Student Phone:</span> (333) 333-3333
                </ul>
                <ul className="py-1">
                  <span className="fw-bold">Enrollment Email:</span> (555)
                  enroll@frontendbc.test
                </ul>
                <ul className="py-1">
                  <span className="fw-bold">Student Email:</span>
                  student@frontendbc.test
                </ul>
              </ul>
            </div>

          </div>
        </div>
      </section>


      <footer className="p-5 bg-dark text-white text-center position-relative">
        <div className="container">
          <p className="lead">Copyright &copy; 2021 DitariIm</p>

          <a href="#" className="position-absolute bottom-0 end-0 p-5">
            <i className="bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </footer>


    </body>
  )
}

export default observer(BeforeLoginPage);