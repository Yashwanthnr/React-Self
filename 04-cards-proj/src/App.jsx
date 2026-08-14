import React from 'react'
import Card from './components/Card'

const jobData = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhjsnkK7QXGWFomKYSmAZej16UxpzNEAAPIQxaF7TPNg&s=10",
    company: "Google",
    posted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: "$42/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png",
    company: "Amazon",
    posted: "5 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1L3U2X-BCHD13OS9FmjP8eRqsgJEz7Vau2XQFo8RRZA&s",
    company: "Apple",
    posted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq7Q44IZaZV_veFoDZeJGgyTiED8noQ5lTNTkxfEqiA&s=10",
    company: "Meta",
    posted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior",
    pay: "$38/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24biC_n_zokNcI0UptspuVGTZ8NcKeC2l0qQXjSm8Rg&s=10",
    company: "Microsoft",
    posted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$58/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2p4lF2_Fmiosf8Zg_H81UdNjZqspTGqH4-3aa3CIZXyr4wtHk5Pn9POw&s=10",
    company: "Netflix",
    posted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFdSOxVWoqbum0CGKenPrk_t_PFKhWeHdZ_0c0EUcKA&s=10",
    company: "NVIDIA",
    posted: "4 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$68/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHpZugauJDW5HcmTr_VxTN8dtpbzjayLWFYj50m3BaQ&s=10 ",
    company: "Adobe",
    posted: "8 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: "$44/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfrc2MuNuSELD361tm5zMln-57m_4GAZUYOBHgTiuow&s=10",
    company: "Intel",
    posted: "3 weeks ago",
    post: "Embedded Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$47/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryjghVtlUo91RnbuEKK_FLLRzEOeiQXZNtl90lrTK7A&s=10",
    company: "IBM",
    posted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Part Time",
    tag2: "Junior",
    pay: "$36/hr",
    location: "Gurugram, India"
  }
];
console.log(jobData);

const App = () => {
  return (
   <div className="parent">
    {jobData.map((el,i)=>{
      return <div key={i}>
        <Card   brandLogo={el.brandLogo} company={el.company}  posted={el.posted} post={el.post}  tag1={el.tag1} tag2={el.tag2} pay={el.pay} location={el.location}   />;
      </div>

    })}

   </div>
  )     
}

export default App
