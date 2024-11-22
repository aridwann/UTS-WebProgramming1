const welcomeContent = `
  <div class="flex items-center gap-2">
    <img src="./src/ic/ic_welcome.png" alt="ic_welcome" class="h-5" />
    <p class="font-bold text-sm">Hallo folks</p>
  </div>
  <section class="flex mt-10 justify-between items-center">
    <div>
      <h1 class="font-bold text-3xl">Welcome to <b> Studio Editor</b></h1>
      <p class="mt-1">
        A place where the greatest photo and video editors <br />
        from around the world come together.
      </p>
      <a
        class="text-[#212529] mt-4 text-sm py-2 cursor-pointer underline hover:text-[gray]"
        onclick="replaceMain(loginContent)"
      >
        Login to continue →
      </a>
    </div>
    <img src="./src/img/my_img.jpg" alt="my_img" class="w-60 grayscale" />
  </section>
  <p class="text-xs text-center mt-20 italic">
    @Copyright by 22552011189_Aridwan_TIF 22 CID
  </p>
</main>
</div>
`;

const registerContent = `
    <form action="" class="flex flex-col">
        <legend
        class="self-center text-2xl pb-2 font-bold border-b-4 border-[#212529] w-max"
        >
        Sign Up
        </legend>
        <div class="flex border-b-2 border-[#212529] flex-col mt-10">
        <label for="" class="font-bold text-sm">Username</label>
        <div class="flex items-center">
            <input id="reg_uname" class="outline-none w-full py-2 text-sm bg-[#edeceb]" type="text" required/>
            <img class="h-6" src="./src/ic/ic_person.png" alt="" />
        </div>
        </div>
        <div class="flex border-b-2 border-[#212529] flex-col mt-5">
        <label for="" class="font-bold text-sm">Email</label>
        <div class="flex items-center">
            <input id="reg_email" class="outline-none py-2 w-full text-sm bg-[#edeceb]" type="text" required/>
            <img class="h-6" src="./src/ic/ic_mail.png" alt="" />
        </div>
        </div>
        <div class="flex border-b-2 border-[#212529] flex-col mt-5">
        <label for="" class="font-bold text-sm">Password</label>
        <div class="flex items-center">
            <input id="reg_pw" class="w-full text-sm outline-none py-2 bg-[#edeceb]" type="text" required/>
            <img class="h-6" src="./src/ic/ic_lock.png" alt="" />
        </div>
        </div>
        <button
        class="text-center rounded-2xl w-full py-3 mt-7 bg-[#212529] shadow-md transition-all duration-100 mb-5 text-sm hover:scale-[.97] text-white font-bold" onclick="register()"
        >
        Sign Up
        </button>
    </form>
    <p class="text-xs text-center mt-20 italic">
        @Copyright by 22552011189_Aridwan_TIF 22 CID
    </p>
`;

const loginContent = `
    <form action="" class="flex flex-col">
        <legend
        class="self-center text-2xl pb-2 font-bold border-b-4 border-[#212529] w-max"
        >
        Login
        </legend>
        <div class="flex border-b-2 border-[#212529] flex-col mt-10">
        <label for="" class="font-bold text-sm">Username</label>
        <div class="flex items-center">
            <input id="login_uname" class="outline-none w-full py-2 text-sm bg-[#edeceb]" type="text" required/>
            <img class="h-6" src="./src/ic/ic_person.png" alt="" />
        </div>
        </div>
        <div class="flex border-b-2 border-[#212529] flex-col mt-5">
        <label for="" class="font-bold  text-sm">Password</label>
        <div class="flex items-center">
            <input id="login_pw" class="w-full outline-none py-2 text-sm bg-[#edeceb]" type="text" required/>
            <img class="h-6" src="./src/ic/ic_lock.png" alt="" />
        </div>
        </div>
        <button
        class="text-center rounded-2xl w-full py-3 mt-7 bg-[#212529] shadow-md transition-all duration-100 mb-5 text-sm hover:scale-[.97] text-white font-bold" onclick="login()"
        >
        Login
        </button>
    </form>
    <p class="text-xs text-center mt-20 italic">
        @Copyright by 22552011189_Aridwan_TIF 22 CID
    </p>
`;

const navAwal = `
    <div
      class="bg-[#212529] rounded-2xl p-2 flex items-center justify-center gap-2 mb-2"
    >
      <img src="./src/logo/logo_company.png" alt="Ini Logo" class="h-14" />
      <h1 class="font-bold text-white">Navigation</h1>
    </div>

    <div
      class="flex items-center ps-5 mt-3 gap-2 hover:scale-95 cursor-pointer"
    >
      <img src="./src/ic/ic_welcome.png" alt="ic_welcome" class="h-5" />
      <a
        id="nav_welcome"
        class="text-sm font-bold"
        onclick="replaceMain(welcomeContent)"
        >Welcome</a
      >
    </div>
    
    <div
      class="flex items-center ps-5 mt-3 gap-2 hover:scale-95 cursor-pointer"
    >
      <img src="./src/ic/ic_login.png" alt="ic_login" class="h-5" />
      <a
        id="nav_login"
        class="text-sm font-bold"
        onclick="replaceMain(loginContent)"
        >Login</a
      >
    </div>

    <div
      class="flex items-center ps-5 mt-3 gap-2 hover:scale-95 cursor-pointer"
    >
      <img src="./src/ic/ic_register.png" alt="ic_register" class="h-5" />
      <a
        id="nav_signup"
        class="text-sm font-bold"
        onclick="replaceMain(registerContent)"
        >Sign Up</a
      >
    </div>
`;

const navSudahLogin = `
    <div
      class="bg-[#212529] rounded-2xl p-2 flex items-center justify-center gap-2 mb-2"
    >
      <img src="./src/logo/logo_company.png" alt="Ini Logo" class="h-14" />
      <h1 class="font-bold text-white">Navigation</h1>
    </div>
    <div
      class="flex items-center ps-5 mt-3 gap-2 hover:scale-95 cursor-pointer"
    >
      <img src="./src/ic/ic_home.png" alt="ic_home" class="h-5" />
      <a
        id="nav_home"
        class="text-sm font-bold"
        onclick="replaceMain(homeContent)"
        >Home</a
      >
    </div>
    <div
      class="flex items-center ps-5 mt-3 gap-2 hover:scale-95 cursor-pointer"
    >
      <img src="./src/ic/ic_info.png" alt="ic_info" class="h-5" />
      <a
        id="nav_about"
        class="text-sm font-bold"
        onclick="replaceMain(aboutContent)"
        >About</a
      >
    </div>
    <div
      class="flex items-center ps-5 mt-3 gap-2 hover:scale-95 cursor-pointer"
    >
      <img src="./src/ic/ic_services.png" alt="ic_services" class="h-5" />
      <a
        id="nav_services"
        class="text-sm font-bold"
        onclick="replaceMain(servicesContent)"
        >Services</a
      >
    </div>
    <div
      class="flex items-center ps-5 mt-3 gap-2 hover:scale-95 cursor-pointer"
    >
      <img src="./src/ic/ic_logout.png" alt="ic_logout" class="h-5" />
      <a id="nav_logout" class="text-sm font-bold" onclick="logout()"
        >Logout</a
      >
    </div>
`;

const homeContent = `
  <div class="flex items-center gap-2">
    <img src="./src/ic/ic_home.png" alt="ic_home" class="h-5" />
    <p class="font-bold text-sm">Hallo ${
      JSON.parse(localStorage.getItem("user")).uname
    }</p>
  </div>
  <section class="flex mt-10 justify-between items-center">
    <div>
      <h1 class="font-bold text-3xl">Welcome to <b> Studio Editor</b></h1>
      <p class="mt-1">
        A place where the greatest photo and video editors <br />
        from around the world come together.
      </p>
      <div>
        <button
          class="rounded-xl border-2 bg-[#212529] mt-3 text-sm px-4 py-2 text-white cursor-pointer hover:scale-95"
          onclick="replaceMain(aboutContent)"
        >
          See More
        </button>
        <button
          class="rounded-xl text-[#212529] mt-3 text-sm ms-2 px-4 py-2 border-2 border-[#212529] bg-white cursor-pointer hover:scale-95"
          onclick="replaceMain(servicesContent)"
        >
          Order Now
        </button>
      </div>
    </div>
    <img src="./src/img/my_img.jpg" alt="my_img" class="w-60 grayscale" />
  </section>
  <p class="text-xs text-center mt-20 italic">
    @Copyright by 22552011189_Aridwan_TIF 22 CID
  </p>
`;

const aboutContent = `
  <div
      class="flex items-center gap-2"
    >
      <img src="./src/ic/ic_info.png" alt="ic_info" class="h-5" />
    <p class="font-bold text-sm">About Our Company</p>
  </div>
  <section class="flex mt-20 justify-between items-center">
    <div>
      <h1 class="font-bold text-3xl">
        Transforming Creativity <br />
        Into Innovation
      </h1>
      <p class="mt-1">Empowering Stories, Empowering People.</p>
    </div>
    <img src="./src/img/img1.jpg" alt="my_img" class="w-60 grayscale" />
  </section>

  <section class="text-center mt-40 text-white bg-[#212529] p-12">
    <h1 class="font-bold text-2xl mb-5">Who We Are</h1>
    <img
      src="./src/logo/logo_company.png"
      alt="logo_company"
      class="mx-auto mb-5 h-20"
    />
    <q>
      We are a global collective of passionate creators, innovators, and
      visionaries. Our mission is to redefine what's possible in photo and
      video editing, crafting unforgettable experiences and empowering
      brands and individuals to tell their stories like never before.
    </q>
  </section>

  <section class="mt-20 text-[#212529] p-12">
    <h1 class="text-center font-bold text-2xl mb-5">
      Our Vision & Mission
    </h1>

    <h1><b>Vision:</b></h1>
    <q
      >To become the go-to hub for the world’s most talented photo and
      video editors, driving creativity and innovation in every frame.</q
    >
    <h1 class="mt-5"><b>Mission:</b></h1>
    <ul class="list-disc ps-5">
      <li>
        Deliver top-tier solutions that elevate visual storytelling.
      </li>
      <li>
        Foster a community of passionate editors from every corner of the
        globe.
      </li>
      <li>Empower creators with cutting-edge tools and resources.</li>
    </ul>
  </section>

  <section class="relative mt-20">
    <img src="./src/img/img2.jpg" alt="img2" class="grayscale" />
    <button
      class="rounded-xl px-5 py-2 bg-white absolute bottom-2 right-2 font-bold hover:scale-95" onclick="replaceMain(servicesContent)"
    >
      Order
    </button>
  </section>

  <p class="text-xs text-center mt-20 italic">
    @Copyright by 22552011189_Aridwan_TIF 22 CID
  </p>
`;

const datas = [
  {
    index: 0,
    imgName: "ic_services",
    title: "Remove <br /> Background",
  },
  {
    index: 1,
    imgName: "ic_camera",
    title: "Photo <br /> Shoot",
  },
  {
    index: 2,
    imgName: "ic_video",
    title: "Video <br /> Shoot",
  },
  {
    index: 3,
    imgName: "ic_design",
    title: "Design <br /> Media",
  },
];

const itemServiceContent = (index) => {
  const data = datas[index];
  return `
    <div class="flex items-center gap-2">
      <img src="./src/ic/${data.imgName}.png" alt="${data.imgName}" class="h-5" />
      <p class="font-bold text-sm">${data.title}</p>
    </div>
    <h1 class="italic text-4xl text-center mt-28 text-[gray]">Coming Soon</h1>
    <p class="text-xs text-center mt-40 italic">
      @Copyright by 22552011189_Aridwan_TIF 22 CID
  </p>
  `;
};

const servicesContent = `
  <div class="flex items-center gap-2">
    <img src="./src/ic/ic_services.png" alt="ic_services" class="h-5" />
    <p class="font-bold text-sm">Our Services</p>
  </div>

  <section
    id="services_list"
    class="mt-14 flex px-20 flex-wrap gap-4 justify-center"
  >
  ${datas.map((data) => {
    return `
      <div class="rounded-2xl bg-[#d6d5d2] p-3 w-28 hover:scale-95 cursor-pointer" onclick={replaceMain(itemServiceContent(${data.index}))}>
      <img
        src="./src/ic/${data.imgName}.png"
        alt="${data.imgName}"
        class="w-10 mx-auto"
      />
      <p class="text-xs text-center">
        ${data.title}
      </p>
    </div>
    `;
  })}
  </section>

  <p class="text-xs text-center mt-20 italic">
    @Copyright by 22552011189_Aridwan_TIF 22 CID
  </p>
`;
