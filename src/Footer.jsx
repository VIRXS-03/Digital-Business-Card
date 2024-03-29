import React from 'react'
import ReactDOM from 'react-dom/client'
import facebook from './assets/facebook-Icon.png'
import twitter from './assets/twitter-Icon.png'
import github from './assets/gitHub-Icon.png'
import instagram from './assets/instagram-Icon.png'

export default function Footer(){
    return(
        <div className="footer">
            <div className="links">
                <a href='' ><img src={facebook}/></a>
                <a href='' ><img src={twitter}/></a>
                <a href='' ><img src={github}/></a>
                <a href='' ><img src={instagram}/></a>
                <div className='switch-mode'>
                    <label className="switch">
                        <input className="mode" type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}
setTimeout(function(){
    document.querySelector(".mode").addEventListener("click",check)
    function check(){
        if(document.querySelector(".mode").checked){
            var element = document.body;
            element.classList.add("light-mode");
        }
        else{
            var element = document.body;
            element.classList.remove("light-mode");
        }
    }
}, 200);
