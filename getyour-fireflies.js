const template = document.createElement("template")
template.innerHTML = /*html*/`

  <style>
      :host {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
      }

      .firefly {
        position: relative;
        left: 50%;
        top: 20%;
        width: 0.4vw;
        height: 0.4vw;
        margin: -0.2vw 0 0 9.8vw;
        animation: ease 200s alternate infinite;
        pointer-events: none;
      }

      .firefly::before, .firefly::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform-origin: -10vw;
      }

      .firefly::before {
        background: black;
        opacity: 0.4;
        animation: drift ease alternate infinite;
      }

      .firefly::after {
        background: white;
        opacity: 0;
        box-shadow: 0 0 0vw 0vw yellow;
        animation: drift ease alternate infinite, flash ease infinite;
      }

      .firefly:nth-child(1) {
        animation-name: move1;
      }

      .firefly:nth-child(1)::before {
        animation-duration: 15s;
      }

      .firefly:nth-child(1)::after {
        animation-duration: 15s, 7817ms;
        animation-delay: 0ms, 3143ms;
      }

      @keyframes move1 {
        0% {
          transform: translateX(-26vw) translateY(-43vh) scale(0.65);
        }

        4.54545% {
          transform: translateX(2vw) translateY(-36vh) scale(0.5);
        }

        9.09091% {
          transform: translateX(-30vw) translateY(36vh) scale(0.7);
        }

        13.63636% {
          transform: translateX(-31vw) translateY(-49vh) scale(0.79);
        }

        18.18182% {
          transform: translateX(-28vw) translateY(-8vh) scale(0.35);
        }

        22.72727% {
          transform: translateX(-24vw) translateY(40vh) scale(0.86);
        }

        27.27273% {
          transform: translateX(-25vw) translateY(24vh) scale(0.41);
        }

        31.81818% {
          transform: translateX(-30vw) translateY(-19vh) scale(0.89);
        }

        36.36364% {
          transform: translateX(-9vw) translateY(-26vh) scale(0.33);
        }

        40.90909% {
          transform: translateX(-12vw) translateY(8vh) scale(0.99);
        }

        45.45455% {
          transform: translateX(-26vw) translateY(-14vh) scale(0.78);
        }

        50% {
          transform: translateX(-16vw) translateY(-30vh) scale(0.77);
        }

        54.54545% {
          transform: translateX(34vw) translateY(-22vh) scale(0.38);
        }

        59.09091% {
          transform: translateX(-26vw) translateY(41vh) scale(0.59);
        }

        63.63636% {
          transform: translateX(-16vw) translateY(10vh) scale(0.66);
        }

        68.18182% {
          transform: translateX(-34vw) translateY(31vh) scale(0.29);
        }

        72.72727% {
          transform: translateX(-35vw) translateY(-47vh) scale(0.7);
        }

        77.27273% {
          transform: translateX(1vw) translateY(24vh) scale(0.8);
        }

        81.81818% {
          transform: translateX(-4vw) translateY(4vh) scale(0.7);
        }

        86.36364% {
          transform: translateX(44vw) translateY(-13vh) scale(0.47);
        }

        90.90909% {
          transform: translateX(6vw) translateY(45vh) scale(0.91);
        }

        95.45455% {
          transform: translateX(6vw) translateY(14vh) scale(0.93);
        }

        100% {
          transform: translateX(45vw) translateY(-28vh) scale(0.78);
        }
      }

      .firefly:nth-child(2) {
        animation-name: move2;
      }

      .firefly:nth-child(2)::before {
        animation-duration: 10s;
      }

      .firefly:nth-child(2)::after {
        animation-duration: 10s, 6387ms;
        animation-delay: 0ms, 6007ms;
      }

      @keyframes move2 {
        0% {
          transform: translateX(-49vw) translateY(8vh) scale(0.29);
        }

        4.54545% {
          transform: translateX(-2vw) translateY(47vh) scale(0.51);
        }

        9.09091% {
          transform: translateX(-30vw) translateY(49vh) scale(0.74);
        }

        13.63636% {
          transform: translateX(-14vw) translateY(35vh) scale(0.46);
        }

        18.18182% {
          transform: translateX(46vw) translateY(-43vh) scale(0.59);
        }

        22.72727% {
          transform: translateX(11vw) translateY(24vh) scale(0.3);
        }

        27.27273% {
          transform: translateX(19vw) translateY(-47vh) scale(0.62);
        }

        31.81818% {
          transform: translateX(29vw) translateY(-27vh) scale(0.54);
        }

        36.36364% {
          transform: translateX(49vw) translateY(19vh) scale(0.4);
        }

        40.90909% {
          transform: translateX(-49vw) translateY(-17vh) scale(0.91);
        }

        45.45455% {
          transform: translateX(2vw) translateY(5vh) scale(0.76);
        }

        50% {
          transform: translateX(17vw) translateY(27vh) scale(0.51);
        }

        54.54545% {
          transform: translateX(14vw) translateY(10vh) scale(0.35);
        }

        59.09091% {
          transform: translateX(-42vw) translateY(-3vh) scale(0.88);
        }

        63.63636% {
          transform: translateX(38vw) translateY(-43vh) scale(0.8);
        }

        68.18182% {
          transform: translateX(-26vw) translateY(5vh) scale(0.9);
        }

        72.72727% {
          transform: translateX(7vw) translateY(-44vh) scale(0.87);
        }

        77.27273% {
          transform: translateX(20vw) translateY(-24vh) scale(0.7);
        }

        81.81818% {
          transform: translateX(3vw) translateY(-38vh) scale(0.93);
        }

        86.36364% {
          transform: translateX(17vw) translateY(-26vh) scale(0.56);
        }

        90.90909% {
          transform: translateX(24vw) translateY(-16vh) scale(0.61);
        }

        95.45455% {
          transform: translateX(35vw) translateY(-23vh) scale(0.46);
        }

        100% {
          transform: translateX(38vw) translateY(13vh) scale(0.67);
        }
      }

      .firefly:nth-child(3) {
        animation-name: move3;
      }

      .firefly:nth-child(3)::before {
        animation-duration: 16s;
      }

      .firefly:nth-child(3)::after {
        animation-duration: 16s, 5679ms;
        animation-delay: 0ms, 6195ms;
      }

      @keyframes move3 {
        0% {
          transform: translateX(-19vw) translateY(37vh) scale(1);
        }

        5.55556% {
          transform: translateX(-14vw) translateY(1vh) scale(0.69);
        }

        11.11111% {
          transform: translateX(2vw) translateY(-1vh) scale(0.55);
        }

        16.66667% {
          transform: translateX(-24vw) translateY(41vh) scale(0.81);
        }

        22.22222% {
          transform: translateX(-15vw) translateY(-40vh) scale(0.61);
        }

        27.77778% {
          transform: translateX(22vw) translateY(-40vh) scale(0.26);
        }

        33.33333% {
          transform: translateX(-37vw) translateY(-31vh) scale(0.37);
        }

        38.88889% {
          transform: translateX(29vw) translateY(18vh) scale(0.67);
        }

        44.44444% {
          transform: translateX(22vw) translateY(48vh) scale(0.95);
        }

        50% {
          transform: translateX(24vw) translateY(8vh) scale(1);
        }

        55.55556% {
          transform: translateX(-45vw) translateY(-35vh) scale(0.34);
        }

        61.11111% {
          transform: translateX(-5vw) translateY(32vh) scale(0.6);
        }

        66.66667% {
          transform: translateX(-41vw) translateY(-44vh) scale(0.52);
        }

        72.22222% {
          transform: translateX(-33vw) translateY(1vh) scale(0.58);
        }

        77.77778% {
          transform: translateX(34vw) translateY(14vh) scale(0.93);
        }

        83.33333% {
          transform: translateX(13vw) translateY(-42vh) scale(0.85);
        }

        88.88889% {
          transform: translateX(17vw) translateY(-14vh) scale(0.41);
        }

        94.44444% {
          transform: translateX(7vw) translateY(-24vh) scale(0.68);
        }

        100% {
          transform: translateX(2vw) translateY(3vh) scale(0.35);
        }
      }

      .firefly:nth-child(4) {
        animation-name: move4;
      }

      .firefly:nth-child(4)::before {
        animation-duration: 15s;
      }

      .firefly:nth-child(4)::after {
        animation-duration: 15s, 7407ms;
        animation-delay: 0ms, 2849ms;
      }

      @keyframes move4 {
        0% {
          transform: translateX(45vw) translateY(24vh) scale(0.85);
        }

        3.57143% {
          transform: translateX(-18vw) translateY(-14vh) scale(0.44);
        }

        7.14286% {
          transform: translateX(3vw) translateY(26vh) scale(0.43);
        }

        10.71429% {
          transform: translateX(22vw) translateY(-48vh) scale(0.97);
        }

        14.28571% {
          transform: translateX(33vw) translateY(-11vh) scale(0.36);
        }

        17.85714% {
          transform: translateX(34vw) translateY(-16vh) scale(0.88);
        }

        21.42857% {
          transform: translateX(40vw) translateY(-34vh) scale(0.63);
        }

        25% {
          transform: translateX(5vw) translateY(13vh) scale(0.82);
        }

        28.57143% {
          transform: translateX(-2vw) translateY(-39vh) scale(0.7);
        }

        32.14286% {
          transform: translateX(20vw) translateY(34vh) scale(0.9);
        }

        35.71429% {
          transform: translateX(-5vw) translateY(-1vh) scale(0.44);
        }

        39.28571% {
          transform: translateX(3vw) translateY(-40vh) scale(0.75);
        }

        42.85714% {
          transform: translateX(5vw) translateY(-27vh) scale(0.42);
        }

        46.42857% {
          transform: translateX(-9vw) translateY(7vh) scale(0.51);
        }

        50% {
          transform: translateX(5vw) translateY(-11vh) scale(0.89);
        }

        53.57143% {
          transform: translateX(16vw) translateY(9vh) scale(0.92);
        }

        57.14286% {
          transform: translateX(-23vw) translateY(33vh) scale(0.92);
        }

        60.71429% {
          transform: translateX(15vw) translateY(-14vh) scale(0.9);
        }

        64.28571% {
          transform: translateX(-19vw) translateY(-45vh) scale(0.63);
        }

        67.85714% {
          transform: translateX(1vw) translateY(-18vh) scale(0.87);
        }

        71.42857% {
          transform: translateX(46vw) translateY(0vh) scale(0.78);
        }

        75% {
          transform: translateX(-20vw) translateY(11vh) scale(0.63);
        }

        78.57143% {
          transform: translateX(2vw) translateY(33vh) scale(0.72);
        }

        82.14286% {
          transform: translateX(44vw) translateY(3vh) scale(0.41);
        }

        85.71429% {
          transform: translateX(-10vw) translateY(23vh) scale(0.8);
        }

        89.28571% {
          transform: translateX(37vw) translateY(14vh) scale(0.7);
        }

        92.85714% {
          transform: translateX(-17vw) translateY(5vh) scale(0.35);
        }

        96.42857% {
          transform: translateX(-24vw) translateY(50vh) scale(0.88);
        }

        100% {
          transform: translateX(20vw) translateY(39vh) scale(0.46);
        }
      }

      .firefly:nth-child(5) {
        animation-name: move5;
      }

      .firefly:nth-child(5)::before {
        animation-duration: 11s;
      }

      .firefly:nth-child(5)::after {
        animation-duration: 11s, 9185ms;
        animation-delay: 0ms, 7038ms;
      }

      @keyframes move5 {
        0% {
          transform: translateX(7vw) translateY(48vh) scale(0.73);
        }

        4.7619% {
          transform: translateX(-39vw) translateY(20vh) scale(0.33);
        }

        9.52381% {
          transform: translateX(-2vw) translateY(0vh) scale(0.82);
        }

        14.28571% {
          transform: translateX(28vw) translateY(-47vh) scale(0.87);
        }

        19.04762% {
          transform: translateX(48vw) translateY(-14vh) scale(0.42);
        }

        23.80952% {
          transform: translateX(33vw) translateY(26vh) scale(0.56);
        }

        28.57143% {
          transform: translateX(-30vw) translateY(-21vh) scale(0.58);
        }

        33.33333% {
          transform: translateX(-13vw) translateY(-42vh) scale(0.75);
        }

        38.09524% {
          transform: translateX(6vw) translateY(-10vh) scale(0.68);
        }

        42.85714% {
          transform: translateX(41vw) translateY(-44vh) scale(0.74);
        }

        47.61905% {
          transform: translateX(-49vw) translateY(-41vh) scale(0.53);
        }

        52.38095% {
          transform: translateX(-35vw) translateY(30vh) scale(0.67);
        }

        57.14286% {
          transform: translateX(12vw) translateY(50vh) scale(0.52);
        }

        61.90476% {
          transform: translateX(-14vw) translateY(48vh) scale(0.38);
        }

        66.66667% {
          transform: translateX(16vw) translateY(23vh) scale(0.49);
        }

        71.42857% {
          transform: translateX(13vw) translateY(-35vh) scale(0.99);
        }

        76.19048% {
          transform: translateX(-45vw) translateY(-31vh) scale(0.32);
        }

        80.95238% {
          transform: translateX(13vw) translateY(-3vh) scale(0.77);
        }

        85.71429% {
          transform: translateX(28vw) translateY(-12vh) scale(0.49);
        }

        90.47619% {
          transform: translateX(18vw) translateY(-7vh) scale(0.38);
        }

        95.2381% {
          transform: translateX(-5vw) translateY(47vh) scale(0.76);
        }

        100% {
          transform: translateX(-5vw) translateY(25vh) scale(0.8);
        }
      }

      .firefly:nth-child(6) {
        animation-name: move6;
      }

      .firefly:nth-child(6)::before {
        animation-duration: 13s;
      }

      .firefly:nth-child(6)::after {
        animation-duration: 13s, 7518ms;
        animation-delay: 0ms, 6158ms;
      }

      @keyframes move6 {
        0% {
          transform: translateX(-35vw) translateY(28vh) scale(0.63);
        }

        4.34783% {
          transform: translateX(-49vw) translateY(1vh) scale(0.57);
        }

        8.69565% {
          transform: translateX(17vw) translateY(-44vh) scale(0.65);
        }

        13.04348% {
          transform: translateX(10vw) translateY(10vh) scale(0.88);
        }

        17.3913% {
          transform: translateX(-11vw) translateY(-5vh) scale(0.55);
        }

        21.73913% {
          transform: translateX(-30vw) translateY(-47vh) scale(0.34);
        }

        26.08696% {
          transform: translateX(-7vw) translateY(40vh) scale(0.66);
        }

        30.43478% {
          transform: translateX(-7vw) translateY(27vh) scale(0.95);
        }

        34.78261% {
          transform: translateX(-14vw) translateY(-23vh) scale(0.37);
        }

        39.13043% {
          transform: translateX(-28vw) translateY(-36vh) scale(0.61);
        }

        43.47826% {
          transform: translateX(24vw) translateY(50vh) scale(0.39);
        }

        47.82609% {
          transform: translateX(48vw) translateY(-24vh) scale(0.3);
        }

        52.17391% {
          transform: translateX(26vw) translateY(-11vh) scale(0.53);
        }

        56.52174% {
          transform: translateX(35vw) translateY(-7vh) scale(0.56);
        }

        60.86957% {
          transform: translateX(34vw) translateY(-16vh) scale(0.62);
        }

        65.21739% {
          transform: translateX(-18vw) translateY(3vh) scale(1);
        }

        69.56522% {
          transform: translateX(-19vw) translateY(5vh) scale(0.77);
        }

        73.91304% {
          transform: translateX(50vw) translateY(16vh) scale(0.89);
        }

        78.26087% {
          transform: translateX(-41vw) translateY(-8vh) scale(0.85);
        }

        82.6087% {
          transform: translateX(-11vw) translateY(-19vh) scale(0.5);
        }

        86.95652% {
          transform: translateX(-27vw) translateY(22vh) scale(0.85);
        }

        91.30435% {
          transform: translateX(20vw) translateY(-31vh) scale(0.64);
        }

        95.65217% {
          transform: translateX(-6vw) translateY(-42vh) scale(0.76);
        }

        100% {
          transform: translateX(-46vw) translateY(11vh) scale(0.94);
        }
      }

      .firefly:nth-child(7) {
        animation-name: move7;
      }

      .firefly:nth-child(7)::before {
        animation-duration: 11s;
      }

      .firefly:nth-child(7)::after {
        animation-duration: 11s, 6259ms;
        animation-delay: 0ms, 7838ms;
      }

      @keyframes move7 {
        0% {
          transform: translateX(8vw) translateY(-37vh) scale(0.86);
        }

        4.54545% {
          transform: translateX(50vw) translateY(18vh) scale(0.39);
        }

        9.09091% {
          transform: translateX(26vw) translateY(-32vh) scale(0.96);
        }

        13.63636% {
          transform: translateX(31vw) translateY(24vh) scale(0.51);
        }

        18.18182% {
          transform: translateX(-21vw) translateY(6vh) scale(1);
        }

        22.72727% {
          transform: translateX(28vw) translateY(-13vh) scale(0.74);
        }

        27.27273% {
          transform: translateX(29vw) translateY(36vh) scale(0.77);
        }

        31.81818% {
          transform: translateX(39vw) translateY(10vh) scale(0.35);
        }

        36.36364% {
          transform: translateX(-25vw) translateY(-39vh) scale(0.79);
        }

        40.90909% {
          transform: translateX(3vw) translateY(31vh) scale(0.98);
        }

        45.45455% {
          transform: translateX(-28vw) translateY(35vh) scale(0.55);
        }

        50% {
          transform: translateX(16vw) translateY(-35vh) scale(0.29);
        }

        54.54545% {
          transform: translateX(-47vw) translateY(22vh) scale(0.29);
        }

        59.09091% {
          transform: translateX(-30vw) translateY(44vh) scale(0.65);
        }

        63.63636% {
          transform: translateX(26vw) translateY(-13vh) scale(0.43);
        }

        68.18182% {
          transform: translateX(48vw) translateY(-14vh) scale(0.65);
        }

        72.72727% {
          transform: translateX(-46vw) translateY(-16vh) scale(0.82);
        }

        77.27273% {
          transform: translateX(45vw) translateY(35vh) scale(0.49);
        }

        81.81818% {
          transform: translateX(-20vw) translateY(31vh) scale(0.52);
        }

        86.36364% {
          transform: translateX(-46vw) translateY(18vh) scale(0.93);
        }

        90.90909% {
          transform: translateX(23vw) translateY(-42vh) scale(0.57);
        }

        95.45455% {
          transform: translateX(-32vw) translateY(-13vh) scale(0.27);
        }

        100% {
          transform: translateX(-45vw) translateY(26vh) scale(0.45);
        }
      }

      .firefly:nth-child(8) {
        animation-name: move8;
      }

      .firefly:nth-child(8)::before {
        animation-duration: 16s;
      }

      .firefly:nth-child(8)::after {
        animation-duration: 16s, 6697ms;
        animation-delay: 0ms, 4791ms;
      }

      @keyframes move8 {
        0% {
          transform: translateX(-44vw) translateY(-25vh) scale(0.56);
        }

        5.55556% {
          transform: translateX(31vw) translateY(-35vh) scale(0.38);
        }

        11.11111% {
          transform: translateX(-47vw) translateY(20vh) scale(0.55);
        }

        16.66667% {
          transform: translateX(-1vw) translateY(-35vh) scale(0.59);
        }

        22.22222% {
          transform: translateX(-30vw) translateY(49vh) scale(0.75);
        }

        27.77778% {
          transform: translateX(-7vw) translateY(-11vh) scale(0.76);
        }

        33.33333% {
          transform: translateX(-23vw) translateY(47vh) scale(0.72);
        }

        38.88889% {
          transform: translateX(-15vw) translateY(19vh) scale(0.82);
        }

        44.44444% {
          transform: translateX(-39vw) translateY(-23vh) scale(0.29);
        }

        50% {
          transform: translateX(33vw) translateY(37vh) scale(0.77);
        }

        55.55556% {
          transform: translateX(-15vw) translateY(-16vh) scale(0.36);
        }

        61.11111% {
          transform: translateX(-12vw) translateY(-49vh) scale(0.63);
        }

        66.66667% {
          transform: translateX(-7vw) translateY(-25vh) scale(0.59);
        }

        72.22222% {
          transform: translateX(20vw) translateY(-10vh) scale(0.99);
        }

        77.77778% {
          transform: translateX(-15vw) translateY(47vh) scale(0.4);
        }

        83.33333% {
          transform: translateX(-2vw) translateY(9vh) scale(0.33);
        }

        88.88889% {
          transform: translateX(26vw) translateY(44vh) scale(0.41);
        }

        94.44444% {
          transform: translateX(-35vw) translateY(4vh) scale(0.8);
        }

        100% {
          transform: translateX(42vw) translateY(11vh) scale(0.87);
        }
      }

      .firefly:nth-child(9) {
        animation-name: move9;
      }

      .firefly:nth-child(9)::before {
        animation-duration: 12s;
      }

      .firefly:nth-child(9)::after {
        animation-duration: 12s, 9003ms;
        animation-delay: 0ms, 571ms;
      }

      @keyframes move9 {
        0% {
          transform: translateX(40vw) translateY(44vh) scale(0.78);
        }

        4.16667% {
          transform: translateX(16vw) translateY(-27vh) scale(0.46);
        }

        8.33333% {
          transform: translateX(-32vw) translateY(0vh) scale(0.51);
        }

        12.5% {
          transform: translateX(49vw) translateY(37vh) scale(0.78);
        }

        16.66667% {
          transform: translateX(-10vw) translateY(45vh) scale(0.56);
        }

        20.83333% {
          transform: translateX(10vw) translateY(10vh) scale(0.47);
        }

        25% {
          transform: translateX(33vw) translateY(-7vh) scale(0.96);
        }

        29.16667% {
          transform: translateX(-45vw) translateY(41vh) scale(0.29);
        }

        33.33333% {
          transform: translateX(-25vw) translateY(-43vh) scale(0.81);
        }

        37.5% {
          transform: translateX(-33vw) translateY(1vh) scale(0.59);
        }

        41.66667% {
          transform: translateX(6vw) translateY(-9vh) scale(0.86);
        }

        45.83333% {
          transform: translateX(-2vw) translateY(-17vh) scale(0.42);
        }

        50% {
          transform: translateX(16vw) translateY(-15vh) scale(0.9);
        }

        54.16667% {
          transform: translateX(2vw) translateY(4vh) scale(0.59);
        }

        58.33333% {
          transform: translateX(26vw) translateY(44vh) scale(0.9);
        }

        62.5% {
          transform: translateX(-20vw) translateY(-47vh) scale(0.77);
        }

        66.66667% {
          transform: translateX(-34vw) translateY(-47vh) scale(0.93);
        }

        70.83333% {
          transform: translateX(45vw) translateY(15vh) scale(0.84);
        }

        75% {
          transform: translateX(20vw) translateY(-31vh) scale(0.44);
        }

        79.16667% {
          transform: translateX(33vw) translateY(-36vh) scale(0.59);
        }

        83.33333% {
          transform: translateX(-12vw) translateY(27vh) scale(0.32);
        }

        87.5% {
          transform: translateX(20vw) translateY(3vh) scale(0.49);
        }

        91.66667% {
          transform: translateX(-12vw) translateY(12vh) scale(0.34);
        }

        95.83333% {
          transform: translateX(14vw) translateY(28vh) scale(0.27);
        }

        100% {
          transform: translateX(-15vw) translateY(47vh) scale(0.6);
        }
      }

      .firefly:nth-child(10) {
        animation-name: move10;
      }

      .firefly:nth-child(10)::before {
        animation-duration: 12s;
      }

      .firefly:nth-child(10)::after {
        animation-duration: 12s, 8149ms;
        animation-delay: 0ms, 5587ms;
      }

      @keyframes move10 {
        0% {
          transform: translateX(-8vw) translateY(-17vh) scale(0.28);
        }

        4.16667% {
          transform: translateX(-35vw) translateY(-28vh) scale(0.99);
        }

        8.33333% {
          transform: translateX(-26vw) translateY(-17vh) scale(0.29);
        }

        12.5% {
          transform: translateX(-40vw) translateY(34vh) scale(0.34);
        }

        16.66667% {
          transform: translateX(-10vw) translateY(14vh) scale(0.39);
        }

        20.83333% {
          transform: translateX(14vw) translateY(31vh) scale(0.3);
        }

        25% {
          transform: translateX(-32vw) translateY(-36vh) scale(0.9);
        }

        29.16667% {
          transform: translateX(46vw) translateY(-13vh) scale(0.31);
        }

        33.33333% {
          transform: translateX(-48vw) translateY(-45vh) scale(0.89);
        }

        37.5% {
          transform: translateX(-25vw) translateY(28vh) scale(0.72);
        }

        41.66667% {
          transform: translateX(27vw) translateY(25vh) scale(0.43);
        }

        45.83333% {
          transform: translateX(-10vw) translateY(-33vh) scale(0.26);
        }

        50% {
          transform: translateX(-5vw) translateY(-49vh) scale(0.73);
        }

        54.16667% {
          transform: translateX(38vw) translateY(46vh) scale(0.53);
        }

        58.33333% {
          transform: translateX(31vw) translateY(-29vh) scale(0.57);
        }

        62.5% {
          transform: translateX(39vw) translateY(-31vh) scale(0.96);
        }

        66.66667% {
          transform: translateX(44vw) translateY(-8vh) scale(0.44);
        }

        70.83333% {
          transform: translateX(41vw) translateY(19vh) scale(0.76);
        }

        75% {
          transform: translateX(44vw) translateY(33vh) scale(0.39);
        }

        79.16667% {
          transform: translateX(-16vw) translateY(22vh) scale(0.94);
        }

        83.33333% {
          transform: translateX(35vw) translateY(-3vh) scale(0.45);
        }

        87.5% {
          transform: translateX(-3vw) translateY(-3vh) scale(0.98);
        }

        91.66667% {
          transform: translateX(34vw) translateY(-8vh) scale(0.35);
        }

        95.83333% {
          transform: translateX(-43vw) translateY(-23vh) scale(0.37);
        }

        100% {
          transform: translateX(35vw) translateY(0vh) scale(0.58);
        }
      }

      .firefly:nth-child(11) {
        animation-name: move11;
      }

      .firefly:nth-child(11)::before {
        animation-duration: 17s;
      }

      .firefly:nth-child(11)::after {
        animation-duration: 17s, 6618ms;
        animation-delay: 0ms, 1260ms;
      }

      @keyframes move11 {
        0% {
          transform: translateX(-13vw) translateY(25vh) scale(0.63);
        }

        3.84615% {
          transform: translateX(-41vw) translateY(18vh) scale(0.97);
        }

        7.69231% {
          transform: translateX(21vw) translateY(11vh) scale(0.87);
        }

        11.53846% {
          transform: translateX(-27vw) translateY(-11vh) scale(0.98);
        }

        15.38462% {
          transform: translateX(-24vw) translateY(-11vh) scale(0.4);
        }

        19.23077% {
          transform: translateX(-26vw) translateY(1vh) scale(0.64);
        }

        23.07692% {
          transform: translateX(-47vw) translateY(10vh) scale(0.75);
        }

        26.92308% {
          transform: translateX(13vw) translateY(-43vh) scale(0.48);
        }

        30.76923% {
          transform: translateX(-36vw) translateY(47vh) scale(0.53);
        }

        34.61538% {
          transform: translateX(-29vw) translateY(-35vh) scale(1);
        }

        38.46154% {
          transform: translateX(23vw) translateY(27vh) scale(0.84);
        }

        42.30769% {
          transform: translateX(36vw) translateY(29vh) scale(0.85);
        }

        46.15385% {
          transform: translateX(5vw) translateY(18vh) scale(0.82);
        }

        50% {
          transform: translateX(41vw) translateY(1vh) scale(0.42);
        }

        53.84615% {
          transform: translateX(40vw) translateY(-14vh) scale(0.66);
        }

        57.69231% {
          transform: translateX(2vw) translateY(-28vh) scale(0.45);
        }

        61.53846% {
          transform: translateX(16vw) translateY(-16vh) scale(0.95);
        }

        65.38462% {
          transform: translateX(48vw) translateY(34vh) scale(0.39);
        }

        69.23077% {
          transform: translateX(-49vw) translateY(-17vh) scale(0.36);
        }

        73.07692% {
          transform: translateX(-7vw) translateY(-45vh) scale(0.97);
        }

        76.92308% {
          transform: translateX(1vw) translateY(11vh) scale(0.88);
        }

        80.76923% {
          transform: translateX(6vw) translateY(-24vh) scale(0.89);
        }

        84.61538% {
          transform: translateX(29vw) translateY(2vh) scale(0.78);
        }

        88.46154% {
          transform: translateX(-20vw) translateY(2vh) scale(0.89);
        }

        92.30769% {
          transform: translateX(45vw) translateY(-45vh) scale(0.61);
        }

        96.15385% {
          transform: translateX(-17vw) translateY(11vh) scale(0.59);
        }

        100% {
          transform: translateX(25vw) translateY(-21vh) scale(0.81);
        }
      }

      .firefly:nth-child(12) {
        animation-name: move12;
      }

      .firefly:nth-child(12)::before {
        animation-duration: 11s;
      }

      .firefly:nth-child(12)::after {
        animation-duration: 11s, 9373ms;
        animation-delay: 0ms, 5277ms;
      }

      @keyframes move12 {
        0% {
          transform: translateX(-23vw) translateY(0vh) scale(0.37);
        }

        4.34783% {
          transform: translateX(-49vw) translateY(18vh) scale(0.91);
        }

        8.69565% {
          transform: translateX(-9vw) translateY(-8vh) scale(0.29);
        }

        13.04348% {
          transform: translateX(16vw) translateY(30vh) scale(0.3);
        }

        17.3913% {
          transform: translateX(20vw) translateY(41vh) scale(0.51);
        }

        21.73913% {
          transform: translateX(-47vw) translateY(-48vh) scale(0.8);
        }

        26.08696% {
          transform: translateX(32vw) translateY(-4vh) scale(0.37);
        }

        30.43478% {
          transform: translateX(-35vw) translateY(42vh) scale(0.27);
        }

        34.78261% {
          transform: translateX(32vw) translateY(16vh) scale(0.61);
        }

        39.13043% {
          transform: translateX(45vw) translateY(-8vh) scale(0.43);
        }

        43.47826% {
          transform: translateX(-14vw) translateY(-31vh) scale(0.95);
        }

        47.82609% {
          transform: translateX(41vw) translateY(47vh) scale(0.58);
        }

        52.17391% {
          transform: translateX(-7vw) translateY(-38vh) scale(0.42);
        }

        56.52174% {
          transform: translateX(-11vw) translateY(14vh) scale(0.6);
        }

        60.86957% {
          transform: translateX(37vw) translateY(13vh) scale(0.72);
        }

        65.21739% {
          transform: translateX(8vw) translateY(-41vh) scale(1);
        }

        69.56522% {
          transform: translateX(43vw) translateY(41vh) scale(0.46);
        }

        73.91304% {
          transform: translateX(48vw) translateY(-7vh) scale(0.48);
        }

        78.26087% {
          transform: translateX(28vw) translateY(-13vh) scale(0.52);
        }

        82.6087% {
          transform: translateX(32vw) translateY(-42vh) scale(0.45);
        }

        86.95652% {
          transform: translateX(44vw) translateY(-24vh) scale(0.63);
        }

        91.30435% {
          transform: translateX(-31vw) translateY(-5vh) scale(0.46);
        }

        95.65217% {
          transform: translateX(-49vw) translateY(-12vh) scale(0.55);
        }

        100% {
          transform: translateX(0vw) translateY(2vh) scale(0.79);
        }
      }

      .firefly:nth-child(13) {
        animation-name: move13;
      }

      .firefly:nth-child(13)::before {
        animation-duration: 18s;
      }

      .firefly:nth-child(13)::after {
        animation-duration: 18s, 9962ms;
        animation-delay: 0ms, 3561ms;
      }

      @keyframes move13 {
        0% {
          transform: translateX(23vw) translateY(-32vh) scale(0.87);
        }

        4.16667% {
          transform: translateX(-38vw) translateY(-3vh) scale(0.56);
        }

        8.33333% {
          transform: translateX(-30vw) translateY(-46vh) scale(0.28);
        }

        12.5% {
          transform: translateX(4vw) translateY(-41vh) scale(0.59);
        }

        16.66667% {
          transform: translateX(-40vw) translateY(50vh) scale(0.33);
        }

        20.83333% {
          transform: translateX(44vw) translateY(-24vh) scale(0.6);
        }

        25% {
          transform: translateX(32vw) translateY(-21vh) scale(0.63);
        }

        29.16667% {
          transform: translateX(18vw) translateY(-26vh) scale(0.86);
        }

        33.33333% {
          transform: translateX(-18vw) translateY(5vh) scale(0.53);
        }

        37.5% {
          transform: translateX(-5vw) translateY(44vh) scale(0.82);
        }

        41.66667% {
          transform: translateX(-25vw) translateY(5vh) scale(0.27);
        }

        45.83333% {
          transform: translateX(43vw) translateY(-41vh) scale(0.73);
        }

        50% {
          transform: translateX(41vw) translateY(22vh) scale(1);
        }

        54.16667% {
          transform: translateX(35vw) translateY(32vh) scale(0.44);
        }

        58.33333% {
          transform: translateX(34vw) translateY(-2vh) scale(0.62);
        }

        62.5% {
          transform: translateX(40vw) translateY(22vh) scale(0.72);
        }

        66.66667% {
          transform: translateX(-35vw) translateY(43vh) scale(0.77);
        }

        70.83333% {
          transform: translateX(-19vw) translateY(-33vh) scale(0.38);
        }

        75% {
          transform: translateX(-24vw) translateY(15vh) scale(0.69);
        }

        79.16667% {
          transform: translateX(-28vw) translateY(-13vh) scale(0.68);
        }

        83.33333% {
          transform: translateX(-31vw) translateY(9vh) scale(0.84);
        }

        87.5% {
          transform: translateX(13vw) translateY(50vh) scale(0.3);
        }

        91.66667% {
          transform: translateX(11vw) translateY(21vh) scale(0.64);
        }

        95.83333% {
          transform: translateX(-39vw) translateY(0vh) scale(0.9);
        }

        100% {
          transform: translateX(20vw) translateY(22vh) scale(0.86);
        }
      }

      .firefly:nth-child(14) {
        animation-name: move14;
      }

      .firefly:nth-child(14)::before {
        animation-duration: 15s;
      }

      .firefly:nth-child(14)::after {
        animation-duration: 15s, 7696ms;
        animation-delay: 0ms, 7476ms;
      }

      @keyframes move14 {
        0% {
          transform: translateX(28vw) translateY(-37vh) scale(0.93);
        }

        4.54545% {
          transform: translateX(-42vw) translateY(-17vh) scale(0.48);
        }

        9.09091% {
          transform: translateX(-13vw) translateY(22vh) scale(0.7);
        }

        13.63636% {
          transform: translateX(5vw) translateY(-14vh) scale(0.42);
        }

        18.18182% {
          transform: translateX(-29vw) translateY(-28vh) scale(0.73);
        }

        22.72727% {
          transform: translateX(41vw) translateY(18vh) scale(1);
        }

        27.27273% {
          transform: translateX(-35vw) translateY(-38vh) scale(0.29);
        }

        31.81818% {
          transform: translateX(-12vw) translateY(43vh) scale(0.46);
        }

        36.36364% {
          transform: translateX(36vw) translateY(35vh) scale(0.42);
        }

        40.90909% {
          transform: translateX(27vw) translateY(28vh) scale(0.68);
        }

        45.45455% {
          transform: translateX(27vw) translateY(-41vh) scale(0.64);
        }

        50% {
          transform: translateX(-35vw) translateY(31vh) scale(0.42);
        }

        54.54545% {
          transform: translateX(-41vw) translateY(-47vh) scale(0.74);
        }

        59.09091% {
          transform: translateX(25vw) translateY(32vh) scale(0.94);
        }

        63.63636% {
          transform: translateX(-6vw) translateY(26vh) scale(0.84);
        }

        68.18182% {
          transform: translateX(-3vw) translateY(1vh) scale(0.35);
        }

        72.72727% {
          transform: translateX(42vw) translateY(41vh) scale(0.65);
        }

        77.27273% {
          transform: translateX(41vw) translateY(-10vh) scale(0.85);
        }

        81.81818% {
          transform: translateX(-8vw) translateY(-19vh) scale(0.97);
        }

        86.36364% {
          transform: translateX(0vw) translateY(33vh) scale(0.38);
        }

        90.90909% {
          transform: translateX(-20vw) translateY(12vh) scale(0.96);
        }

        95.45455% {
          transform: translateX(33vw) translateY(32vh) scale(0.27);
        }

        100% {
          transform: translateX(-37vw) translateY(-4vh) scale(0.95);
        }
      }

      .firefly:nth-child(15) {
        animation-name: move15;
      }

      .firefly:nth-child(15)::before {
        animation-duration: 9s;
      }

      .firefly:nth-child(15)::after {
        animation-duration: 9s, 5272ms;
        animation-delay: 0ms, 926ms;
      }

      @keyframes move15 {
        0% {
          transform: translateX(-16vw) translateY(-3vh) scale(0.27);
        }

        3.57143% {
          transform: translateX(24vw) translateY(30vh) scale(0.47);
        }

        7.14286% {
          transform: translateX(36vw) translateY(31vh) scale(0.83);
        }

        10.71429% {
          transform: translateX(0vw) translateY(18vh) scale(0.72);
        }

        14.28571% {
          transform: translateX(-4vw) translateY(10vh) scale(0.81);
        }

        17.85714% {
          transform: translateX(-15vw) translateY(8vh) scale(0.92);
        }

        21.42857% {
          transform: translateX(-31vw) translateY(-35vh) scale(0.65);
        }

        25% {
          transform: translateX(-4vw) translateY(10vh) scale(0.4);
        }

        28.57143% {
          transform: translateX(26vw) translateY(-48vh) scale(0.3);
        }

        32.14286% {
          transform: translateX(-27vw) translateY(-30vh) scale(0.77);
        }

        35.71429% {
          transform: translateX(30vw) translateY(23vh) scale(0.94);
        }

        39.28571% {
          transform: translateX(33vw) translateY(2vh) scale(0.34);
        }

        42.85714% {
          transform: translateX(14vw) translateY(4vh) scale(0.43);
        }

        46.42857% {
          transform: translateX(-10vw) translateY(22vh) scale(0.37);
        }

        50% {
          transform: translateX(31vw) translateY(50vh) scale(0.89);
        }

        53.57143% {
          transform: translateX(17vw) translateY(-9vh) scale(0.99);
        }

        57.14286% {
          transform: translateX(-12vw) translateY(19vh) scale(0.84);
        }

        60.71429% {
          transform: translateX(23vw) translateY(48vh) scale(0.83);
        }

        64.28571% {
          transform: translateX(29vw) translateY(-46vh) scale(0.31);
        }

        67.85714% {
          transform: translateX(-23vw) translateY(-36vh) scale(0.72);
        }

        71.42857% {
          transform: translateX(29vw) translateY(8vh) scale(0.58);
        }

        75% {
          transform: translateX(-22vw) translateY(-42vh) scale(0.74);
        }

        78.57143% {
          transform: translateX(48vw) translateY(-13vh) scale(0.57);
        }

        82.14286% {
          transform: translateX(-6vw) translateY(33vh) scale(0.37);
        }

        85.71429% {
          transform: translateX(-21vw) translateY(-25vh) scale(0.49);
        }

        89.28571% {
          transform: translateX(-46vw) translateY(8vh) scale(0.9);
        }

        92.85714% {
          transform: translateX(-9vw) translateY(46vh) scale(0.52);
        }

        96.42857% {
          transform: translateX(-29vw) translateY(-27vh) scale(0.68);
        }

        100% {
          transform: translateX(0vw) translateY(-41vh) scale(0.65);
        }
      }

      .firefly:nth-child(16) {
        animation-name: move16;
      }

      .firefly:nth-child(16)::before {
        animation-duration: 13s;
      }

      .firefly:nth-child(16)::after {
        animation-duration: 13s, 6852ms;
        animation-delay: 0ms, 8341ms;
      }

      @keyframes move16 {
        0% {
          transform: translateX(-21vw) translateY(5vh) scale(0.45);
        }

        5.88235% {
          transform: translateX(50vw) translateY(33vh) scale(0.58);
        }

        11.76471% {
          transform: translateX(-33vw) translateY(-35vh) scale(0.69);
        }

        17.64706% {
          transform: translateX(47vw) translateY(-13vh) scale(0.91);
        }

        23.52941% {
          transform: translateX(-43vw) translateY(38vh) scale(0.72);
        }

        29.41176% {
          transform: translateX(35vw) translateY(25vh) scale(0.62);
        }

        35.29412% {
          transform: translateX(8vw) translateY(-2vh) scale(0.48);
        }

        41.17647% {
          transform: translateX(-5vw) translateY(15vh) scale(0.36);
        }

        47.05882% {
          transform: translateX(8vw) translateY(-28vh) scale(0.68);
        }

        52.94118% {
          transform: translateX(50vw) translateY(31vh) scale(0.5);
        }

        58.82353% {
          transform: translateX(13vw) translateY(32vh) scale(0.67);
        }

        64.70588% {
          transform: translateX(24vw) translateY(28vh) scale(0.31);
        }

        70.58824% {
          transform: translateX(14vw) translateY(30vh) scale(0.36);
        }

        76.47059% {
          transform: translateX(41vw) translateY(44vh) scale(0.3);
        }

        82.35294% {
          transform: translateX(38vw) translateY(4vh) scale(0.66);
        }

        88.23529% {
          transform: translateX(-19vw) translateY(42vh) scale(0.74);
        }

        94.11765% {
          transform: translateX(8vw) translateY(-46vh) scale(0.35);
        }

        100% {
          transform: translateX(-44vw) translateY(-2vh) scale(0.53);
        }
      }

      .firefly:nth-child(17) {
        animation-name: move17;
      }

      .firefly:nth-child(17)::before {
        animation-duration: 15s;
      }

      .firefly:nth-child(17)::after {
        animation-duration: 15s, 8009ms;
        animation-delay: 0ms, 4648ms;
      }

      @keyframes move17 {
        0% {
          transform: translateX(30vw) translateY(-19vh) scale(0.95);
        }

        5.55556% {
          transform: translateX(-2vw) translateY(-24vh) scale(0.91);
        }

        11.11111% {
          transform: translateX(31vw) translateY(50vh) scale(0.58);
        }

        16.66667% {
          transform: translateX(24vw) translateY(8vh) scale(0.7);
        }

        22.22222% {
          transform: translateX(-40vw) translateY(16vh) scale(0.57);
        }

        27.77778% {
          transform: translateX(-27vw) translateY(-32vh) scale(0.38);
        }

        33.33333% {
          transform: translateX(14vw) translateY(-31vh) scale(0.52);
        }

        38.88889% {
          transform: translateX(-46vw) translateY(-1vh) scale(0.38);
        }

        44.44444% {
          transform: translateX(7vw) translateY(2vh) scale(0.29);
        }

        50% {
          transform: translateX(50vw) translateY(49vh) scale(0.8);
        }

        55.55556% {
          transform: translateX(24vw) translateY(26vh) scale(0.58);
        }

        61.11111% {
          transform: translateX(23vw) translateY(17vh) scale(0.63);
        }

        66.66667% {
          transform: translateX(-8vw) translateY(-47vh) scale(0.61);
        }

        72.22222% {
          transform: translateX(23vw) translateY(-21vh) scale(0.36);
        }

        77.77778% {
          transform: translateX(-32vw) translateY(0vh) scale(0.31);
        }

        83.33333% {
          transform: translateX(2vw) translateY(32vh) scale(1);
        }

        88.88889% {
          transform: translateX(47vw) translateY(39vh) scale(0.76);
        }

        94.44444% {
          transform: translateX(-18vw) translateY(25vh) scale(0.69);
        }

        100% {
          transform: translateX(-39vw) translateY(-42vh) scale(0.61);
        }
      }

      .firefly:nth-child(18) {
        animation-name: move18;
      }

      .firefly:nth-child(18)::before {
        animation-duration: 17s;
      }

      .firefly:nth-child(18)::after {
        animation-duration: 17s, 9025ms;
        animation-delay: 0ms, 1044ms;
      }

      @keyframes move18 {
        0% {
          transform: translateX(41vw) translateY(-12vh) scale(0.47);
        }

        4.34783% {
          transform: translateX(31vw) translateY(40vh) scale(0.52);
        }

        8.69565% {
          transform: translateX(-2vw) translateY(-4vh) scale(0.52);
        }

        13.04348% {
          transform: translateX(-47vw) translateY(42vh) scale(0.47);
        }

        17.3913% {
          transform: translateX(23vw) translateY(40vh) scale(0.63);
        }

        21.73913% {
          transform: translateX(-36vw) translateY(41vh) scale(0.73);
        }

        26.08696% {
          transform: translateX(-32vw) translateY(41vh) scale(0.96);
        }

        30.43478% {
          transform: translateX(-46vw) translateY(-33vh) scale(0.45);
        }

        34.78261% {
          transform: translateX(-49vw) translateY(-17vh) scale(0.6);
        }

        39.13043% {
          transform: translateX(49vw) translateY(-23vh) scale(0.99);
        }

        43.47826% {
          transform: translateX(19vw) translateY(2vh) scale(0.95);
        }

        47.82609% {
          transform: translateX(15vw) translateY(29vh) scale(0.59);
        }

        52.17391% {
          transform: translateX(12vw) translateY(-35vh) scale(0.76);
        }

        56.52174% {
          transform: translateX(46vw) translateY(43vh) scale(0.97);
        }

        60.86957% {
          transform: translateX(34vw) translateY(-32vh) scale(0.71);
        }

        65.21739% {
          transform: translateX(-12vw) translateY(0vh) scale(0.79);
        }

        69.56522% {
          transform: translateX(35vw) translateY(6vh) scale(0.62);
        }

        73.91304% {
          transform: translateX(0vw) translateY(-22vh) scale(0.53);
        }

        78.26087% {
          transform: translateX(7vw) translateY(3vh) scale(0.98);
        }

        82.6087% {
          transform: translateX(38vw) translateY(-49vh) scale(0.35);
        }

        86.95652% {
          transform: translateX(41vw) translateY(18vh) scale(1);
        }

        91.30435% {
          transform: translateX(-30vw) translateY(-1vh) scale(0.8);
        }

        95.65217% {
          transform: translateX(0vw) translateY(-26vh) scale(0.5);
        }

        100% {
          transform: translateX(-27vw) translateY(19vh) scale(0.34);
        }
      }

      .firefly:nth-child(19) {
        animation-name: move19;
      }

      .firefly:nth-child(19)::before {
        animation-duration: 12s;
      }

      .firefly:nth-child(19)::after {
        animation-duration: 12s, 7041ms;
        animation-delay: 0ms, 1617ms;
      }

      @keyframes move19 {
        0% {
          transform: translateX(33vw) translateY(41vh) scale(0.76);
        }

        5% {
          transform: translateX(-20vw) translateY(23vh) scale(0.58);
        }

        10% {
          transform: translateX(-33vw) translateY(30vh) scale(0.74);
        }

        15% {
          transform: translateX(15vw) translateY(9vh) scale(0.38);
        }

        20% {
          transform: translateX(30vw) translateY(-38vh) scale(0.74);
        }

        25% {
          transform: translateX(-30vw) translateY(15vh) scale(0.45);
        }

        30% {
          transform: translateX(-41vw) translateY(48vh) scale(0.28);
        }

        35% {
          transform: translateX(20vw) translateY(-8vh) scale(0.92);
        }

        40% {
          transform: translateX(11vw) translateY(-21vh) scale(0.82);
        }

        45% {
          transform: translateX(-4vw) translateY(-36vh) scale(0.33);
        }

        50% {
          transform: translateX(22vw) translateY(15vh) scale(0.8);
        }

        55% {
          transform: translateX(13vw) translateY(29vh) scale(0.64);
        }

        60% {
          transform: translateX(48vw) translateY(-49vh) scale(0.91);
        }

        65% {
          transform: translateX(2vw) translateY(-21vh) scale(0.5);
        }

        70% {
          transform: translateX(-22vw) translateY(28vh) scale(0.76);
        }

        75% {
          transform: translateX(-26vw) translateY(-32vh) scale(0.38);
        }

        80% {
          transform: translateX(36vw) translateY(-35vh) scale(0.8);
        }

        85% {
          transform: translateX(46vw) translateY(35vh) scale(0.27);
        }

        90% {
          transform: translateX(32vw) translateY(-26vh) scale(0.89);
        }

        95% {
          transform: translateX(49vw) translateY(42vh) scale(0.89);
        }

        100% {
          transform: translateX(-25vw) translateY(44vh) scale(0.94);
        }
      }

      .firefly:nth-child(20) {
        animation-name: move20;
      }

      .firefly:nth-child(20)::before {
        animation-duration: 12s;
      }

      .firefly:nth-child(20)::after {
        animation-duration: 12s, 10265ms;
        animation-delay: 0ms, 4730ms;
      }

      @keyframes move20 {
        0% {
          transform: translateX(2vw) translateY(0vh) scale(0.7);
        }

        5.55556% {
          transform: translateX(46vw) translateY(23vh) scale(0.74);
        }

        11.11111% {
          transform: translateX(22vw) translateY(15vh) scale(0.98);
        }

        16.66667% {
          transform: translateX(-18vw) translateY(-5vh) scale(1);
        }

        22.22222% {
          transform: translateX(-39vw) translateY(-1vh) scale(0.54);
        }

        27.77778% {
          transform: translateX(-13vw) translateY(-22vh) scale(0.88);
        }

        33.33333% {
          transform: translateX(38vw) translateY(-37vh) scale(0.73);
        }

        38.88889% {
          transform: translateX(-2vw) translateY(6vh) scale(0.65);
        }

        44.44444% {
          transform: translateX(-18vw) translateY(49vh) scale(0.64);
        }

        50% {
          transform: translateX(-24vw) translateY(12vh) scale(0.53);
        }

        55.55556% {
          transform: translateX(-6vw) translateY(-40vh) scale(0.76);
        }

        61.11111% {
          transform: translateX(-13vw) translateY(-48vh) scale(0.79);
        }

        66.66667% {
          transform: translateX(-7vw) translateY(-24vh) scale(0.73);
        }

        72.22222% {
          transform: translateX(24vw) translateY(-32vh) scale(0.57);
        }

        77.77778% {
          transform: translateX(30vw) translateY(-7vh) scale(0.52);
        }

        83.33333% {
          transform: translateX(-16vw) translateY(28vh) scale(0.9);
        }

        88.88889% {
          transform: translateX(24vw) translateY(-20vh) scale(0.46);
        }

        94.44444% {
          transform: translateX(-27vw) translateY(-16vh) scale(0.87);
        }

        100% {
          transform: translateX(-1vw) translateY(11vh) scale(0.81);
        }
      }

      @keyframes drift {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes flash {
        0%, 30%, 100% {
          opacity: 0;
          box-shadow: 0 0 0vw 0vw yellow;
        }

        5% {
          opacity: 1;
          box-shadow: 0 0 2vw 0.4vw yellow;
        }
      }
  </style>

  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>
  <div class="firefly"></div>

`

class GetyourFireflies extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define("getyour-fireflies", GetyourFireflies)
