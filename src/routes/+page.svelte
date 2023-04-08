<script>
import Typewriter from "svelte-typewriter";
/** @type {import('./$types').PageData} */
export let data;

import ArticleComponent from "../components/ArticleComponent.svelte";



</script>

<svelte:head>
	<title>Welcome to Rohit Maurya's website</title>
    <meta name="description" content="I am the founder of Coding Chaska. I teach Python, Data Science, & Website Developement.">
</svelte:head>

<div class="section section1">

<div class="container">

    <div class="row">
        <div class="col-7">

    <br />

    <p class="welcome-text">WELCOME TO MY WORLD</p>
    <div data-aos="fade">
    <h1>Hello, I'm <span class="name">Rohit Maurya</span></h1>

    <Typewriter loopRandom><h1>a <span class="typewriter-title">developer.</span> <span class="typewriter-title">creator.</span> <span class="typewriter-title">teacher.</span> </h1></Typewriter>
    </div>
    <p data-aos="fade-up" class="description">
        I envision Bharat becoming a Vishwa Guru.  I aim to contribute to that mission in a small way. I am honored to serve my country. 
        <a  rel="noreferrer" target="_blank" href="/article/learning-setu-vision-beliefs-and-core-values">Read More</a>
    </p>
    <br/>

    <div class="sm-wrapper">

    <p>Find me here:</p>

    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rohit-maurya-b41439a9/">
    
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin svg" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg>

    </a>
    <a rel="noreferrer" target="_blank" href="https://www.instagram.com/codingchaskaofficial/">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-instagram svg" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg>
    
    </a>
    </div>

    <br />
    </div>
    <div data-aos="fade" class="col-5">
        <br />
        <img alt="laptop" class="image" src={"./laptop.png"} >
        <br />
    </div>
    
    </div>
</div>
</div>

<div class="section2 section">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="header-wrapper">
                <p class="subtitle">Trying & Failing</p>
                <h2 class="header">What I Do</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div data-aos="fade-down" class="card">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-palette svg" viewBox="0 0 16 16">
                        <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                        <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
                      </svg>
                      <div >
                <h3>I Create</h3>
                <span>Graphics, Website & Mobile Applications, and Videos.
                </span></div>
                </div>
            </div>
            <div class="col-6">
                <div data-aos="fade-down" class="card">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-laptop svg" viewBox="0 0 16 16">
                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                      </svg>
                <div>
                <h3>I Teach</h3>
                <span>Python, Website & App Development, and Data Science</span>
            </div>
            </div>
            </div>
            

            <div  class="col-6">
                <div data-aos="fade-up" class="card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-book svg" viewBox="0 0 16 16">
                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                      </svg>
                    <div>
                    <h3>I Read</h3>
                    <span>Psychology, Geopolitics, Investing, Politics, and History</span>
                     </div>
                </div>
            </div>

            <div class="col-6">
                <div data-aos="fade-up" class="card">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-emoji-heart-eyes svg" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/>
                      </svg>
                      <div>
                    <h3>I Like</h3>
               
                    <span>Travelling, Exercising, Reading, and Playing Chess</span>
                    </div>

            </div>

            <br />



            </div>
        </div>
        
    </div>
</div>



<br />


<div class="section section3">
    <div class="container">

        <div class="row">
        <div class="col-12">
            <div class="header-wrapper">
                    <span class="subtitle">Mission 1</span>
                    <h2 class="header">Coding Chaska</h2>
                     <span data-aos="fade">
                        I am building Coding Chaska. 
                        The mission is to make coding easy and fun. 
                        We create an atmosphere where everyone develops a Chaska in coding. 
                        Join our programs and courses to empower yourselves. Let's enrich our country together. </span>
                    <br />
                    <br />
                   <a data-aos="fade" href="https://www.codingchaska.com/" rel="noreferrer" target="_blank"><button>Know more </button></a>
            </div>

            <br />
            <br />

            <div class="header-wrapper">
                <span class="subtitle">Mission 2</span>
                <h2 class="header">Decorate Ghar</h2>
                 <span data-aos="fade">
                    
                    We are a team of passionate interior designers who love to create beautiful and functional spaces for our clients.
                    We listen to your needs, preferences, and budget, and offer you personalized solutions that suit your lifestyle and personality. Decorate Ghar provides its services in Naigaon, Mira Road, Bhayandar, & Vasai.
                </span>
                <br />
                <br />
               <a data-aos="fade" href="https://www.decorateghar.com/" rel="noreferrer" target="_blank"><button>Know more </button></a>
        </div>
         </div>
        </div>
        <br />
    
    
    </div>
  
</div>


<div class="section section4">
    <div class="container">

    <div class="row">
        <div class="col-12">
            <div class="header-wrapper">
            <span class="subtitle">What I think</span>
            <h2 class="header">Recent Articles</h2>

            
            </div>
        </div>
        {#each data.results.slice(0,3) as item}
            <ArticleComponent article={item} />
        {/each}



        
    </div>

    <br />
    <br />
    </div>
</div>


<div class="section section5">
    <div class="container">
    <div class="row">
        <div class="col-6">
            <span class="subtitle">Just a messge away</span>
            <h4>Contact Me</h4>
        </div>

        <div class="col-6">
            <p class="subtitle">Email</p>
            <p>rohit@thelearningsetu.com</p> 
        </div>

        <div></div>
    </div>
    </div>
</div>



