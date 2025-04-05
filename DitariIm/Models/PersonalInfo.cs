﻿using System;

namespace DitariIm.Models
{
    public class PersonalInfo
    {
        public Guid Id { get; set; }
        public string PersonalNumber { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string MaritalStatus { get; set; }
    }
}
