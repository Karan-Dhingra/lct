import React from 'react'
import img1 from '../media/Blog/5_1.jpg'
import img2 from '../media/Blog/5_2.png'
import img3 from '../media/Blog/5_3.jpg'
import img4 from '../media/Blog/5_4.jpg'
import img5 from '../media/Blog/5_5.jpg'
import "./blog5.css"

export const Blog5 = () => {
    return (
        <div className="container-blogs">
            <h1 className="title-top">5 Best Platform to Learn DSA Paid/Free ??</h1>
            <div className="body">
                <p><b>DSA</b> means Data Structure and Algorithms. Data structure and Algorithm (<b>DSA</b>) is applied in all disciplines of software development. <b>DSA</b> is the building block of the software development process. It is not limited to a single
                <b>programming</b> language. Although programming languages evolve or get dormant over time, <b>DSA</b> is incorporated into all of these languages.
            </p>
                <br />
                <p>It is not like DSA is only these particular languages these not. DSA is like a concept which helps to make programs fast/optimized. DSA don’t just important for programing. DSA increases the personal skills for solving a particular issue or
                we can say helps in <b>SOLVING PROBLEMS</b> in real life and Programing.</p>
                <br />
                <h2>Why we need to do DSA?</h2>
                <p>DSA is skills which is key requirement for any Company. If you want to sit in placements or Internship, one of the important subject is DSA. So Learning <b>DSA is a + Point</b>.</p>
                <br />
                <h2>Which Language to choose?</h2>
                <p>There is nothing like you have to do this Language you can go for DSA with any Language like <b>C++,
                    Java, C, Python, etc.</b> If you will ask my opinion I will prefer choosing C++ if you don’t like C++ you can go with Java. I don’t prefer Python because Python comes with in-built Libraries. Your Interviewer or recruiter may not like
                to solve problems in Python.<br /><br /> So, we know <b>WHICH TO CHOOSE?</b> , <b>WHY TO CHOOSE?</b> know I will tell you how you can do.<br /><br /> BEST ONLINE COURSES Paid and Free and WHY THAT? You can o with any one course of your choice.</p>
                <br />
                <h1 className="ul-heading">5 BEST COURSES</h1>
                <ul>
                    <li>
                        <h2 className="li-heading">
                            <a href="">GEEKS-FOR-GEEKS DSA – SELF PLACED COURSE.</a>
                        </h2>
                        <p className="li-para">This is Geeks For Geeks(GFG) Paid course. GeeksforGeeks realizes the importance of programming practice in climbing the stairs of success in the field of Computer Science. That is why, it also provides an option of practicing problems.
                        This huge database of problems is created by programming experts. This is one of my favorite platform where you can go. This is value for money and you will get certificate too.</p>
                        <div className="li-image">
                            <img src={img1} alt="" className="li-image" />
                        </div>
                    </li>
                    <br />
                    <br />
                    <li>
                        <h2 className="li-heading">
                            <a href="">GFG – COMPLETE INTERVIEW PREPARATION WITH DOUBT ASSISTANCE</a>
                        </h2>
                        <p className="li-para">This is another course from GFG that covers everything which id need for placement with certificate. This is content which starts from a language (C++/ Java) then with CS-Subjects.
                    </p>
                        <div className="li-image">
                            <img src={img2} alt="" className="li-image" />
                        </div>
                    </li>
                    <br />
                    <li>
                        <h2 className="li-heading">
                            <a href="">C++ PLACEMENT COURSE – COMPLETE COURSE FOR BEGINNERS TO ADVANCE</a>
                        </h2>
                        <p className="li-para">This course is made by one of the known YouTuber Aman Dhattarwal known by Aman Bhaiya. He is having 3 4 Channels for Students. Best Unacademy tutor of Physics for JEE. This course is made by Aman Bhaiya team and team covers Engineers
                        / College Students. I WILL PREFER THIS COURSE FOR BEGINNERS TO ADVANCE LEVEL in field of Programing rather if you want to go for Competitive Coding or any other.</p>
                        <div className="li-image">

                            <img src={img3} alt="" className="li-image" />
                        </div>
                    </li>
                    <br />
                    <br />
                    <li>
                        <h2 className="li-heading">
                            <a href="">CWH DSA COURSE</a>
                        </h2>
                        <p className="li-para">CodeWithHarry (CWH) is the YouTube channel by Harry. This course is the free course and you will able to learn everything. which you need to do. CLICK HERE to visit his Channel. If you want to any programming Language wither C, C++,
                        Python, Java, Android Development, Web Development, Angular, Node any many more you can to with 0₹
                    </p>
                        <div className="li-image">

                            <img src={img4} alt="" className="li-image" />
                        </div>
                    </li>
                    <br />
                    <br />
                    <li>
                        <h2 className="li-heading">
                            <a href="">DSA – ONE COURSE</a>
                        </h2>
                        <p className="li-para">This is another free course you can go with. This is made by Anuj Bhaiya, he is Software Engineer at Amazon. This course covers all DSA Concepts. This course is made with Java i.e. DSA with Java. If you like Java you can go with this
                        course.
                    </p>
                        <div className="li-image">

                            <img src={img5} alt="" width="700" className="li-image" />
                        </div>
                    </li>
                    <br />
                    <br />
                </ul>
                <p className="ending-page">So, this was the list if you want any course either paid or free. If you want <b>PAID COURSE FREE</b> then you can go to my previous Blog. <b>If this post helps you then go and like</b>. If having any Questions feel free to <b>Contact</b>                Me. Don't forget to follow us on Instagram for Latest Posts.</p>
            </div>
        </div>
    )
}

export default Blog5
