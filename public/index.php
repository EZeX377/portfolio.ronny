
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="style.css" rel="stylesheet">
  <title>Portfolio</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
</head>
<style>
  html, body{ scroll-behavior: smooth; }
</style>
<body class="bg-black overflow-hidden h-screen text-gray-400">
  <div class="grid md:grid-cols-12 lg:grid-cols-11 h-full overflow-auto ">
    <!-- sidenav -->
    <div class="h-4/6 transition-[height] ease-in-out my-auto bg-neutral-900 md:col-span-2 lg:col-span-1 rounded-full md:ml-2 lg:ml-4 flex hover:h-5/6 active:h-5/6" id="menu">
      <div class="m-auto p-2">
        <div class="">
          <div class="grid justify-center">
            <div class="bg-white mx-auto w-20 h-20 rounded-full"></div>
            <div class="w-max text-center"><p class="text-gray-300 text-xl font-semibold">Ronny Das</p></div>
          </div>
        </div>
        <hr class="my-2 lg:my-8">
        <ul class=" text-center">
          <li class="py-2 lg:text-xl text-orange-500"><a href="#home">Home</a></li>
          <li class="py-2 lg:text-xl"><a href="#about">About Me</a></li>
          <li class="py-2 lg:text-xl"><a href="#skills">My Skills</a></li>
          <li class="py-2 lg:text-xl"><a href="#resume">Resume</a></li>
          <li class="py-2 lg:text-xl"><a href="#portfolio">Portfolio</a></li>
          <li class="py-2 lg:text-xl"><a href="#contact">Contact Me</a></li>
<!--           <li><hr class="my-2 lg:my-8"></li> -->
<!--           <li class="mt-4 lg:text-xl"><button><i class="bi bi-x text-3xl"></i></button></li> -->
        </ul>
      </div>
    </div>

    <!-- upgrade want sidenav -->
    <!-- <div class="h-1/6 lg:h-4/6 transition-[height] ease-in-out my-auto bg-neutral-900 col-span-1 rounded-full flex" id="menu">
      <div class="hidden lg:block m-auto p-2">
        <div class="">
          <div class="grid justify-center">
            <div class="bg-white mx-auto w-20 h-20 rounded-full"></div>
            <div class="w-max text-center"><p class="text-gray-300 text-xl font-semibold">Ronny Das</p></div>
          </div>
        </div>
        <hr class="my-8">
        <ul class=" text-center">
          <li class="py-2 lg:text-xl text-orange-500"><a href="#home">Home</a></li>
          <li class="py-2 lg:text-xl"><a href="#about">About Me</a></li>
          <li class="py-2 lg:text-xl"><a href="#skills">My Skills</a></li>
          <li class="py-2 lg:text-xl"><a href="#resume">Resume</a></li>
          <li class="py-2 lg:text-xl"><a href="#portfolio">Portfolio</a></li>
          <li class="py-2 lg:text-xl"><a href="#contact">Contact Me</a></li>
        </ul>
      </div>
      <div class="lg:hidden m-auto p-2">
        <button><i class="bi bi-list text-3xl"></i></button>
      </div>
    </div> -->

    <!-- main content -->
    <div class="h-full md:col-span-10 lg:col-span-10 overflow-auto">
      <!-- container -->
      <div class="container mx-auto pt-16 pb-8 lg:pt-32 lg:pb-16 px-4">
        <!-- Hero section -->
        <div class="grid lg:grid-cols-2 py-24 lg:py-48" id="home">
          <div class="">
            <h1 class="text-5xl lg:text-7xl tracking-wide"><span class="text-orange-500">Hi,</span> my name is <br><span class="text-8xl lg:text-9xl text-gray-300">Ronny Das</span><span class="text-orange-500">.</span></h1>
            <p class="text-3xl mt-10">I'm a UI/UX Developer</p>
            <p class="mt-2">I love to work in UI/UX designing. I always try my best to make good UI with the best UX.</p>
            <p class="text-xl lg:text-2xl mt-24 text-right">Currently employed at <span class="text-white">Cognitive Tech <i class="bi bi-arrow-right ml-2"></i></span></p>
          </div>
          <div class=""></div>
        </div>
        <!-- about section -->
        <div class="grid lg:grid-cols-2 py-28" id="about">
          <div class="hidden lg:block"></div>
          <div class="">
            <span class="text-orange-500">INTRO</span>
            <h1 class="text-4xl tracking-wide mb-8 text-white">About Me</h1>
            <p class="lg:text-xl mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium impedit eum fugit tenetur quo eos quod facere, praesentium delectus architecto, veritatis nemo, blanditiis quae ratione sequi, ipsa eveniet. Eum, facilis!</p>
            <p class="lg:text-xl mb-2">Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Odio voluptas cumque aperiam. Consequuntur iusto minima dolorem ullam quos nesciunt repellendus quibusdam, expedita quod praesentium explicabo blanditiis earum, alias sit non!</p>
            <p class="lg:text-xl mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <button class="border border-white rounded-md py-2 px-3 mt-10 hover:bg-neutral-800 hover:text-gray-300 hover:border-transparent transition ease-in-out"><i class="bi bi-download"></i> Download Resume</button>
          </div>
        </div>
        <!-- skills section -->
        <div class="py-28" id="skills">
          <div class="">
            <div class="text-center">
              <span class="text-orange-500">SKILLS</span>
              <h1 class="text-4xl tracking-wide mb-8 text-white">My Professional skills</h1>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-14 mt-10">
              <div class="">
                <div class="md:mb-10 lg:mb-16">
                  <p>Web Design</p>
                  <div class="mt-2 w-full h-1 rounded-full bg-neutral-900"><div class="h-1 w-10/12 bg-orange-200 rounded-full relative"><div class="h-3 w-3 rounded-full bg-orange-200 absolute right-0 -top-1"></div><div class="h-5 w-5 rounded-full border border-orange-200 absolute -right-1 -top-2"></div></div></div>
                </div>
              </div>
              <div class="">
                <div class="md:mb-10 lg:mb-16">
                  <p>HTML 5</p>
                  <div class="mt-2 w-full h-1 rounded-full bg-neutral-900"><div class="h-1 w-11/12 bg-orange-200 rounded-full relative"><div class="h-3 w-3 rounded-full bg-orange-200 absolute right-0 -top-1"></div><div class="h-5 w-5 rounded-full border border-orange-200 absolute -right-1 -top-2"></div></div></div>
                </div>
              </div>
              <div class="">
                <div class="md:mb-10 lg:mb-16">
                  <p>CSS 3</p>
                  <div class="mt-2 w-full h-1 rounded-full bg-neutral-900"><div class="h-1 w-11/12 bg-orange-200 rounded-full relative"><div class="h-3 w-3 rounded-full bg-orange-200 absolute right-0 -top-1"></div><div class="h-5 w-5 rounded-full border border-orange-200 absolute -right-1 -top-2"></div></div></div>
                </div>
              </div>
              <div class="">
                <div class="md:mb-10 lg:mb-16">
                  <p>JavaScript</p>
                  <div class="mt-2 w-full h-1 rounded-full bg-neutral-900"><div class="h-1 w-7/12 bg-orange-200 rounded-full relative"><div class="h-3 w-3 rounded-full bg-orange-200 absolute right-0 -top-1"></div><div class="h-5 w-5 rounded-full border border-orange-200 absolute -right-1 -top-2"></div></div></div>
                </div>
              </div>
              <div class="">
                <div class="md:mb-10 lg:mb-16">
                  <p>MySQL</p>
                  <div class="mt-2 w-full h-1 rounded-full bg-neutral-900"><div class="h-1 w-9/12 bg-orange-200 rounded-full relative"><div class="h-3 w-3 rounded-full bg-orange-200 absolute right-0 -top-1"></div><div class="h-5 w-5 rounded-full border border-orange-200 absolute -right-1 -top-2"></div></div></div>
                </div>
              </div>
              <div class="">
                <div class="md:mb-10 lg:mb-16">
                  <p>PHP</p>
                  <div class="mt-2 w-full h-1 rounded-full bg-neutral-900"><div class="h-1 w-7/12 bg-orange-200 rounded-full relative"><div class="h-3 w-3 rounded-full bg-orange-200 absolute right-0 -top-1"></div><div class="h-5 w-5 rounded-full border border-orange-200 absolute -right-1 -top-2"></div></div></div>
                </div>
              </div>
              <div class="">
                <div class="md:mb-10 lg:mb-16">
                  <p>Bootstrap 5</p>
                  <div class="mt-2 w-full h-1 rounded-full bg-neutral-900"><div class="h-1 w-11/12 bg-orange-200 rounded-full relative"><div class="h-3 w-3 rounded-full bg-orange-200 absolute right-0 -top-1"></div><div class="h-5 w-5 rounded-full border border-orange-200 absolute -right-1 -top-2"></div></div></div>
                </div>
              </div>
              <div class="">
                <div class="md:mb-10 lg:mb-16">
                  <p>Tailwind</p>
                  <div class="mt-2 w-full h-1 rounded-full bg-neutral-900"><div class="h-1 w-8/12 bg-orange-200 rounded-full relative"><div class="h-3 w-3 rounded-full bg-orange-200 absolute right-0 -top-1"></div><div class="h-5 w-5 rounded-full border border-orange-200 absolute -right-1 -top-2"></div></div></div>
                </div>
              </div>
              <div class="">
                <div class="md:mb-10 lg:mb-16">
                  <p>Photoshop</p>
                  <div class="mt-2 w-full h-1 rounded-full bg-neutral-900"><div class="h-1 w-7/12 bg-orange-200 rounded-full relative"><div class="h-3 w-3 rounded-full bg-orange-200 absolute right-0 -top-1"></div><div class="h-5 w-5 rounded-full border border-orange-200 absolute -right-1 -top-2"></div></div></div>
                </div>
              </div>
              <div class="">
                <div class="md:mb-10 lg:mb-16">
                  <p>Figma</p>
                  <div class="mt-2 w-full h-1 rounded-full bg-neutral-900"><div class="h-1 w-5/12 bg-orange-200 rounded-full relative"><div class="h-3 w-3 rounded-full bg-orange-200 absolute right-0 -top-1"></div><div class="h-5 w-5 rounded-full border border-orange-200 absolute -right-1 -top-2"></div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- resume section -->
        <div class="py-28" id="resume">
          <div class="">
            <div class="">
              <span class="text-orange-500">RESUME</span>
              <h1 class="text-4xl tracking-wide mb-8 text-white">My Experience</h1>
            </div>
            <div class="grid grid-flow-col md:grid-cols-2 md:grid-rows-2 md:gap-x-6 md:gap-y-10 lg:gap-x-28 lg:gap-y-14 mt-10">
              <div class="">
                <div class=" h-full mb-4 relative before:content-[''] before:absolute before:border-2 before:w-4 before:h-4 before:rounded-full before:border-orange-500 before:-top-4 before:-left-2 after:absolute after:border-2 after:w-4 after:h-4 after:rounded-full after:border-orange-500 after:-bottom-4 after:-left-2 border-l-2 border-orange-500 md:px-2 md:pt-2 lg:pb-4 lg:px-8 lg:pt-4 lg:pb-8">
                  <p class="font-semibold text-xl text-gray-100 mb-1">Cognitive Tech</p>
                  <p class="font-semibold text-orange-50 mb-4">Nov 2021 - Present</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Assumenda eveniet quia, omnis, sequi voluptas id libero fuga earum illum at similique veniam quae tenetur cum, nulla reprehenderit necessitatibus, minima explicabo!</p>
                </div>
              </div>
              <div class="">
                <div class=" h-full mb-4 relative before:content-[''] before:absolute before:border-2 before:w-4 before:h-4 before:rounded-full before:border-orange-500 before:-top-4 before:-left-2 after:absolute after:border-2 after:w-4 after:h-4 after:rounded-full after:border-orange-500 after:-bottom-4 after:-left-2 border-l-2 border-orange-500 md:px-2 md:pt-2 lg:pb-4 lg:px-8 lg:pt-4 lg:pb-8">                  
                  <p class="font-semibold text-xl text-gray-100 mb-1">Freelance</p>
                  <p class="font-semibold text-orange-50 mb-4">Mar 2020 - Present</p>
                  <ul class="list-disc ml-4">
                    <li class="mb-2"><p>Deliver independent UI/UX projects to customers and already has great feedback.</p></li>
                    <li class="mb-2"><p>Created graphics designs for websites, tournaments, graphic assets and icons.</p></li>
                    <li class=""><p>Worked with 1 NGO and provide them a platform to help launch themselves.</p></li>
                  </ul>
                </div>
              </div>
              <div class="">
                <div class=" h-full mb-4 relative before:content-[''] before:absolute before:border-2 before:w-4 before:h-4 before:rounded-full before:border-orange-500 before:-top-4 before:-left-2 after:absolute after:border-2 after:w-4 after:h-4 after:rounded-full after:border-orange-500 after:-bottom-4 after:-left-2 border-l-2 border-orange-500 md:px-2 md:pt-2 lg:pb-4 lg:px-8 lg:pt-4 lg:pb-8">
                  <p class="font-semibold text-xl text-gray-100 mb-1">ATTOYF Technologies &amp; Communications</p>
                  <p class="font-semibold text-orange-50 mb-4">Feb 2018 - Jan 2020</p>
                  <p class="mb-2">Employed as a front end developer, where I developed dynamic and interactive website that ensured effective UI/UX.</p>
                  <ul class="list-disc ml-4">
                    <li class="mb-2"><p>Oversaw full life cycle of software development for 6 projects with on time delivery.</p></li>
                    <li class="mb-2"><p>Fixed bugs from existing websites and implemented enhancements that significantly improved UI/UX.</p></li>
                    <li class=""><p>Assisted BCA interns in expanding design knowledge and independently develop their own projects.</p></li>
                  </ul>              
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- portfolio section -->
        <div class="py-28" id="portfolio">
          <div class="">
            <div class="text-center">
              <span class="text-orange-500">PORTFOLIO</span>
              <h1 class="text-4xl tracking-wide mb-8 text-white">My Work</h1>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-14 mt-10 px-28">

              <div class="">
                <div class="">
                  <div class="bg-neutral-800 relative rounded-lg overflow-hidden h-80">
                    <!-- <img src="../assets/work.jpg" alt="" class="w-full h-full object-cover object-center"> -->
                    <div class="absolute bottom-0 p-8 bg-neutral-800 w-full h-full flex flex-col">
                      <p class="text-xl font-extrabold text-white mb-4">PROJECT NAME</p>
                      <p class="">Lorem, ipsum, dolor sit amet consectetur adipisicing elit.</p>
                      <div class="text-center mt-auto ml-auto">
                        <button class="mx-1 bg-white rounded-full text-neutral-800 p-2 text"><i class="bi bi-arrows-angle-expand"></i></button>
                        <button class="mx-1 bg-white rounded-full text-neutral-800 p-2 text-xl"><i class="bi bi-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="">
                  <div class="bg-neutral-800 relative rounded-lg overflow-hidden h-80">
                    <!-- <img src="../assets/work.jpg" alt="" class="w-full h-full object-cover object-center"> -->
                    <div class="absolute bottom-0 p-8 bg-neutral-800 w-full h-full flex flex-col">
                      <p class="text-xl font-extrabold text-white mb-4">PROJECT NAME</p>
                      <p class="">Lorem, ipsum, dolor sit amet consectetur adipisicing elit.</p>
                      <div class="text-center mt-auto ml-auto">
                        <button class="mx-1 bg-white rounded-full text-neutral-800 p-2 text"><i class="bi bi-arrows-angle-expand"></i></button>
                        <button class="mx-1 bg-white rounded-full text-neutral-800 p-2 text-xl"><i class="bi bi-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="">
                  <div class="bg-neutral-800 relative rounded-lg overflow-hidden h-80">
                    <!-- <img src="../assets/work.jpg" alt="" class="w-full h-full object-cover object-center"> -->
                    <div class="absolute bottom-0 p-8 bg-neutral-800 w-full h-full flex flex-col">
                      <p class="text-xl font-extrabold text-white mb-4">GRAPHICS DESIGN</p>
                      <p class="">Lorem, ipsum, dolor sit amet consectetur adipisicing elit.</p>
                      <div class="text-center mt-auto ml-auto">
                        <button class="mx-1 bg-white rounded-full text-neutral-800 p-2 text"><i class="bi bi-arrows-angle-expand"></i></button>
                        <button class="mx-1 bg-white rounded-full text-neutral-800 p-2 text-xl"><i class="bi bi-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="">
                  <div class="bg-neutral-800 relative rounded-lg overflow-hidden h-80">
                    <!-- <img src="../assets/work.jpg" alt="" class="w-full h-full object-cover object-center"> -->
                    <div class="absolute bottom-0 p-8 bg-neutral-800 w-full h-full flex flex-col">
                      <p class="text-xl font-extrabold text-white mb-4">GRAPHICS DESIGN</p>
                      <p class="">Lorem, ipsum, dolor sit amet consectetur adipisicing elit.</p>
                      <div class="text-center mt-auto ml-auto">
                        <button class="mx-1 bg-white rounded-full text-neutral-800 p-2 text"><i class="bi bi-arrows-angle-expand"></i></button>
                        <button class="mx-1 bg-white rounded-full text-neutral-800 p-2 text-xl"><i class="bi bi-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="">
                  <div class="bg-neutral-800 relative rounded-lg overflow-hidden h-80">
                    <!-- <img src="../assets/work.jpg" alt="" class="w-full h-full object-cover object-center"> -->
                    <div class="absolute bottom-0 p-8 bg-neutral-800 w-full h-full flex flex-col">
                      <p class="text-xl font-extrabold text-white mb-4">GRAPHICS DESIGN</p>
                      <p class="">Lorem, ipsum, dolor sit amet consectetur adipisicing elit.</p>
                      <div class="text-center mt-auto ml-auto">
                        <button class="mx-1 bg-white rounded-full text-neutral-800 p-2 text"><i class="bi bi-arrows-angle-expand"></i></button>
                        <button class="mx-1 bg-white rounded-full text-neutral-800 p-2 text-xl"><i class="bi bi-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <!-- contact section -->
        <div class="py-28" id="contact">
          <div class="">
            <div class="">
              <span class="text-orange-500">CONTACT</span>
              <h1 class="text-4xl tracking-wide mb-6 text-white">Want to reach me?</h1>
              <p class="mb-16 text-gray-300 text-xl">For any queries or questions feel free to contact me or leave me a message</p>
            </div>
            <div class="grid lg:grid-cols-2 lg:grid-cols-2 md:gap-8 lg:gap-14 mt-10 items-center">
              <div class="">
                <div class=" mb-10">
                  <i class="text-sm bi bi-pin-map bg-orange-500 py-2 px-3 rounded-full text-black"></i> <span>58, Fatashil Ambari, opp. P.W.D. office, Guwahati, Assam, 781025</span>
                </div>
                <div class=" mb-10">
                  <i class="text-sm bi bi-phone bg-orange-500 py-2 px-3 rounded-full text-black"></i> <span>+91 967 803 7963</span>
                </div>
                <div class=" mb-10">
                  <i class="text-sm bi bi-envelope bg-orange-500 py-2 px-3 rounded-full text-black"></i> <span>iamronnydas@gmail.com</span>
                </div>
              </div>
              <div class="">
                <div class="bg-neutral-800 p-3 md:p-0 opacity-90 rounded-md">
                  <div class="p-4 md:p-8 lg:py-12">
                    <form action="">
                      <input type="text" class="form-input bg-neutral-700 px-2 py-1 block w-full rounded-md border-0 focus:outline-none focus:ring focus:ring-neutral-600" placeholder="Your name">
                      <input type="text" class="form-input bg-neutral-700 px-2 py-1 mt-4 block w-full rounded-md border-0 focus:outline-none focus:ring focus:ring-neutral-600" placeholder="Mobile number">
                      <textarea rows="3" class="form-textarea bg-neutral-700 px-2 py-1 mt-4 block w-full rounded-md border-0 focus:outline-none focus:ring focus:ring-neutral-600" placeholder="Message..."></textarea>
                      <div class="mt-4 text-right">
                      <button class="border border-orange-500 text-gray-300 rounded-full py-2 px-4 hover:bg-orange-500 hover:text-white hover:border-transparent transition ease-in-out"><i class="bi bi-send"></i> Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center py-8">
        <p>&copy; 2022 Ronny Das | All rights reserved</p>
      </div>
    </div>
  </div>


</body>
</html>