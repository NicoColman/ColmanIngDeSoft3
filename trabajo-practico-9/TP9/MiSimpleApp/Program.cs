using System;

class Program
{
    static void Main()
    {
        Reservation reservation = new Reservation();
        User user=new User();
        user.IsAdmin=true;
        bool result=reservation.CanBeCancelledBy(user);
        Console.WriteLine(result);
    }
}



