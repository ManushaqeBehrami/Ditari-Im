using Microsoft.AspNetCore.Identity;

namespace DitariIm.Models
{
    public abstract class User : IdentityUser
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public abstract string Role { get; set; }

    }
}
