import "./Card.css"
import React from "react"
import image from "../assets/lasanha.png"
import ratotouile from "../assets/ratatouile.png"
import carne from "../assets/carne.png"
function Card() {
  return (
    <div className="Card">
      <div className="image1 mt-5">
        <img src={image} />
     <div>
       
     </div>
        <svg className="icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#F2994A" />
          <path d="M18.566 11.092C18.6981 10.8242 18.9025 10.5986 19.1561 10.4409C19.4097 10.2832 19.7023 10.1997 20.001 10.1997C20.2996 10.1997 20.5923 10.2832 20.8459 10.4409C21.0995 10.5986 21.3039 10.8242 21.436 11.092L23.66 15.596L28.632 16.318C28.9276 16.3609 29.2052 16.4857 29.4335 16.6783C29.6618 16.8708 29.8317 17.1234 29.9239 17.4075C30.0161 17.6916 30.027 17.9958 29.9552 18.2857C29.8835 18.5756 29.732 18.8397 29.518 19.048L25.92 22.554L26.77 27.506C26.8205 27.8001 26.7878 28.1026 26.6755 28.3791C26.5632 28.6556 26.3758 28.8952 26.1344 29.0708C25.8931 29.2464 25.6075 29.351 25.3098 29.3728C25.0121 29.3946 24.7143 29.3326 24.45 29.194L20 26.854L15.552 29.194C15.2877 29.3326 14.9898 29.3946 14.6922 29.3728C14.3945 29.351 14.1089 29.2464 13.8675 29.0708C13.6262 28.8952 13.4388 28.6556 13.3265 28.3791C13.2141 28.1026 13.1814 27.8001 13.232 27.506L14.08 22.554L10.482 19.048C10.2679 18.8396 10.1165 18.5753 10.0448 18.2853C9.9732 17.9952 9.98422 17.6909 10.0766 17.4067C10.1691 17.1226 10.3392 16.87 10.5678 16.6776C10.7964 16.4852 11.0742 16.3606 11.37 16.318L16.342 15.598L18.564 11.092H18.566ZM20.002 12.704L18.042 16.67C17.9275 16.9024 17.7583 17.1036 17.549 17.2562C17.3396 17.4087 17.0963 17.5082 16.84 17.546L12.46 18.182L15.63 21.27C15.8157 21.4511 15.9546 21.6746 16.0347 21.9212C16.1149 22.1679 16.1338 22.4304 16.09 22.686L15.342 27.046L19.258 24.986C19.4875 24.8655 19.7428 24.8025 20.002 24.8025C20.2612 24.8025 20.5165 24.8655 20.746 24.986L24.662 27.046L23.914 22.686C23.8701 22.4304 23.8891 22.1679 23.9692 21.9212C24.0494 21.6746 24.1883 21.4511 24.374 21.27L27.542 18.18L23.164 17.544C22.9073 17.5065 22.6636 17.4072 22.4539 17.2546C22.2441 17.102 22.0746 16.9007 21.96 16.668L20 12.704H20.002Z" fill="#F8F8F8" />
          <path d="M20 39C9.50659 39 1 30.4934 1 20H-1C-1 31.598 8.40202 41 20 41V39ZM39 20C39 30.4934 30.4934 39 20 39V41C31.598 41 41 31.598 41 20H39ZM20 1C30.4934 1 39 9.50659 39 20H41C41 8.40202 31.598 -1 20 -1V1ZM20 -1C8.40202 -1 -1 8.40202 -1 20H1C1 9.50659 9.50659 1 20 1V-1Z" fill="#F8F8F8" />
        </svg>

      </div>
      <div className="descrip">
        <footer>
          <span>Pasta</span>
          <h5 className="name">Lasanha Bolonhesa</h5>
          <span>Calories:584   Carbs:84g   Fat:20g   Protein:19g</span>
        </footer>
      </div>

      <div className="image1 mt-5">
        <img src={ratotouile} />
        <svg className="icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#F2994A" />
          <path d="M18.566 11.092C18.6981 10.8242 18.9025 10.5986 19.1561 10.4409C19.4097 10.2832 19.7023 10.1997 20.001 10.1997C20.2996 10.1997 20.5923 10.2832 20.8459 10.4409C21.0995 10.5986 21.3039 10.8242 21.436 11.092L23.66 15.596L28.632 16.318C28.9276 16.3609 29.2052 16.4857 29.4335 16.6783C29.6618 16.8708 29.8317 17.1234 29.9239 17.4075C30.0161 17.6916 30.027 17.9958 29.9552 18.2857C29.8835 18.5756 29.732 18.8397 29.518 19.048L25.92 22.554L26.77 27.506C26.8205 27.8001 26.7878 28.1026 26.6755 28.3791C26.5632 28.6556 26.3758 28.8952 26.1344 29.0708C25.8931 29.2464 25.6075 29.351 25.3098 29.3728C25.0121 29.3946 24.7143 29.3326 24.45 29.194L20 26.854L15.552 29.194C15.2877 29.3326 14.9898 29.3946 14.6922 29.3728C14.3945 29.351 14.1089 29.2464 13.8675 29.0708C13.6262 28.8952 13.4388 28.6556 13.3265 28.3791C13.2141 28.1026 13.1814 27.8001 13.232 27.506L14.08 22.554L10.482 19.048C10.2679 18.8396 10.1165 18.5753 10.0448 18.2853C9.9732 17.9952 9.98422 17.6909 10.0766 17.4067C10.1691 17.1226 10.3392 16.87 10.5678 16.6776C10.7964 16.4852 11.0742 16.3606 11.37 16.318L16.342 15.598L18.564 11.092H18.566ZM20.002 12.704L18.042 16.67C17.9275 16.9024 17.7583 17.1036 17.549 17.2562C17.3396 17.4087 17.0963 17.5082 16.84 17.546L12.46 18.182L15.63 21.27C15.8157 21.4511 15.9546 21.6746 16.0347 21.9212C16.1149 22.1679 16.1338 22.4304 16.09 22.686L15.342 27.046L19.258 24.986C19.4875 24.8655 19.7428 24.8025 20.002 24.8025C20.2612 24.8025 20.5165 24.8655 20.746 24.986L24.662 27.046L23.914 22.686C23.8701 22.4304 23.8891 22.1679 23.9692 21.9212C24.0494 21.6746 24.1883 21.4511 24.374 21.27L27.542 18.18L23.164 17.544C22.9073 17.5065 22.6636 17.4072 22.4539 17.2546C22.2441 17.102 22.0746 16.9007 21.96 16.668L20 12.704H20.002Z" fill="#F8F8F8" />
          <path d="M20 39C9.50659 39 1 30.4934 1 20H-1C-1 31.598 8.40202 41 20 41V39ZM39 20C39 30.4934 30.4934 39 20 39V41C31.598 41 41 31.598 41 20H39ZM20 1C30.4934 1 39 9.50659 39 20H41C41 8.40202 31.598 -1 20 -1V1ZM20 -1C8.40202 -1 -1 8.40202 -1 20H1C1 9.50659 9.50659 1 20 1V-1Z" fill="#F8F8F8" />
        </svg>
      </div>
      <div className="descrip">
        <footer>
          <span>Vegan</span>
          <h5 className="name">Ratatoille</h5>
          <span>Calories:584   Carbs:84g   Fat:20g   Protein:19g</span>
        </footer>
      </div>

      <div className="image1 mt-5">
        <img src={carne} />
        <svg className="icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#F2994A" />
          <path d="M18.566 11.092C18.6981 10.8242 18.9025 10.5986 19.1561 10.4409C19.4097 10.2832 19.7023 10.1997 20.001 10.1997C20.2996 10.1997 20.5923 10.2832 20.8459 10.4409C21.0995 10.5986 21.3039 10.8242 21.436 11.092L23.66 15.596L28.632 16.318C28.9276 16.3609 29.2052 16.4857 29.4335 16.6783C29.6618 16.8708 29.8317 17.1234 29.9239 17.4075C30.0161 17.6916 30.027 17.9958 29.9552 18.2857C29.8835 18.5756 29.732 18.8397 29.518 19.048L25.92 22.554L26.77 27.506C26.8205 27.8001 26.7878 28.1026 26.6755 28.3791C26.5632 28.6556 26.3758 28.8952 26.1344 29.0708C25.8931 29.2464 25.6075 29.351 25.3098 29.3728C25.0121 29.3946 24.7143 29.3326 24.45 29.194L20 26.854L15.552 29.194C15.2877 29.3326 14.9898 29.3946 14.6922 29.3728C14.3945 29.351 14.1089 29.2464 13.8675 29.0708C13.6262 28.8952 13.4388 28.6556 13.3265 28.3791C13.2141 28.1026 13.1814 27.8001 13.232 27.506L14.08 22.554L10.482 19.048C10.2679 18.8396 10.1165 18.5753 10.0448 18.2853C9.9732 17.9952 9.98422 17.6909 10.0766 17.4067C10.1691 17.1226 10.3392 16.87 10.5678 16.6776C10.7964 16.4852 11.0742 16.3606 11.37 16.318L16.342 15.598L18.564 11.092H18.566ZM20.002 12.704L18.042 16.67C17.9275 16.9024 17.7583 17.1036 17.549 17.2562C17.3396 17.4087 17.0963 17.5082 16.84 17.546L12.46 18.182L15.63 21.27C15.8157 21.4511 15.9546 21.6746 16.0347 21.9212C16.1149 22.1679 16.1338 22.4304 16.09 22.686L15.342 27.046L19.258 24.986C19.4875 24.8655 19.7428 24.8025 20.002 24.8025C20.2612 24.8025 20.5165 24.8655 20.746 24.986L24.662 27.046L23.914 22.686C23.8701 22.4304 23.8891 22.1679 23.9692 21.9212C24.0494 21.6746 24.1883 21.4511 24.374 21.27L27.542 18.18L23.164 17.544C22.9073 17.5065 22.6636 17.4072 22.4539 17.2546C22.2441 17.102 22.0746 16.9007 21.96 16.668L20 12.704H20.002Z" fill="#F8F8F8" />
          <path d="M20 39C9.50659 39 1 30.4934 1 20H-1C-1 31.598 8.40202 41 20 41V39ZM39 20C39 30.4934 30.4934 39 20 39V41C31.598 41 41 31.598 41 20H39ZM20 1C30.4934 1 39 9.50659 39 20H41C41 8.40202 31.598 -1 20 -1V1ZM20 -1C8.40202 -1 -1 8.40202 -1 20H1C1 9.50659 9.50659 1 20 1V-1Z" fill="#F8F8F8" />
        </svg>
      </div>
      <div className="descrip">
        <footer>
          <span>Meat</span>
          <h5 className="name">Carne alemã na panela de pressão</h5>
          <span>Calories:584   Carbs:84g   Fat:20g   Protein:19g</span>
        </footer>
      </div>

      <div className="image1 mt-5">
        <img src={image} />
        <svg className="icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#F2994A" />
          <path d="M18.566 11.092C18.6981 10.8242 18.9025 10.5986 19.1561 10.4409C19.4097 10.2832 19.7023 10.1997 20.001 10.1997C20.2996 10.1997 20.5923 10.2832 20.8459 10.4409C21.0995 10.5986 21.3039 10.8242 21.436 11.092L23.66 15.596L28.632 16.318C28.9276 16.3609 29.2052 16.4857 29.4335 16.6783C29.6618 16.8708 29.8317 17.1234 29.9239 17.4075C30.0161 17.6916 30.027 17.9958 29.9552 18.2857C29.8835 18.5756 29.732 18.8397 29.518 19.048L25.92 22.554L26.77 27.506C26.8205 27.8001 26.7878 28.1026 26.6755 28.3791C26.5632 28.6556 26.3758 28.8952 26.1344 29.0708C25.8931 29.2464 25.6075 29.351 25.3098 29.3728C25.0121 29.3946 24.7143 29.3326 24.45 29.194L20 26.854L15.552 29.194C15.2877 29.3326 14.9898 29.3946 14.6922 29.3728C14.3945 29.351 14.1089 29.2464 13.8675 29.0708C13.6262 28.8952 13.4388 28.6556 13.3265 28.3791C13.2141 28.1026 13.1814 27.8001 13.232 27.506L14.08 22.554L10.482 19.048C10.2679 18.8396 10.1165 18.5753 10.0448 18.2853C9.9732 17.9952 9.98422 17.6909 10.0766 17.4067C10.1691 17.1226 10.3392 16.87 10.5678 16.6776C10.7964 16.4852 11.0742 16.3606 11.37 16.318L16.342 15.598L18.564 11.092H18.566ZM20.002 12.704L18.042 16.67C17.9275 16.9024 17.7583 17.1036 17.549 17.2562C17.3396 17.4087 17.0963 17.5082 16.84 17.546L12.46 18.182L15.63 21.27C15.8157 21.4511 15.9546 21.6746 16.0347 21.9212C16.1149 22.1679 16.1338 22.4304 16.09 22.686L15.342 27.046L19.258 24.986C19.4875 24.8655 19.7428 24.8025 20.002 24.8025C20.2612 24.8025 20.5165 24.8655 20.746 24.986L24.662 27.046L23.914 22.686C23.8701 22.4304 23.8891 22.1679 23.9692 21.9212C24.0494 21.6746 24.1883 21.4511 24.374 21.27L27.542 18.18L23.164 17.544C22.9073 17.5065 22.6636 17.4072 22.4539 17.2546C22.2441 17.102 22.0746 16.9007 21.96 16.668L20 12.704H20.002Z" fill="#F8F8F8" />
          <path d="M20 39C9.50659 39 1 30.4934 1 20H-1C-1 31.598 8.40202 41 20 41V39ZM39 20C39 30.4934 30.4934 39 20 39V41C31.598 41 41 31.598 41 20H39ZM20 1C30.4934 1 39 9.50659 39 20H41C41 8.40202 31.598 -1 20 -1V1ZM20 -1C8.40202 -1 -1 8.40202 -1 20H1C1 9.50659 9.50659 1 20 1V-1Z" fill="#F8F8F8" />
        </svg>
      </div>
      <div className="descrip">
        <footer>
          <span>Pasta</span>
          <h5 className="name">Lasanha Bolonhesa</h5>
          <span>Calories:584   Carbs:84g   Fat:20g   Protein:19g</span>
        </footer>
      </div>
    </div>

  )
}
export default Card;