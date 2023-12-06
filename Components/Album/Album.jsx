"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import Image from "next/image";

function Album() {
  const SongsBank = {
    songs: {
      song1: {
        id: "1",
        audioTrackTitle: "Shobuj Kolponay",
        audioTrack: "/01 Shobuj Kolponay.wav",
        audioTrakTime: "8.31",
      },
      song2: {
        id: "2",
        audioTrackTitle: "Economic Hitman Extended",
        audioTrack: "/09 Economic Hitman Extended.wav",
        audioTrakTime: "5.57",
      },
      song3: {
        id: "3",
        audioTrackTitle: "Liberty",
        audioTrack: "/10 Liberty.wav",
        audioTrakTime: "4.02",
      },
      song4: {
        id: "4",
        audioTrackTitle: "Koshto",
        audioTrack: "/03 Koshto.wav",
        audioTrakTime: "5.57",
      },
      song5: {
        id: "5",
        audioTrackTitle: "Bhaar",
        audioTrack: "/02 Bhaar.wav",
        audioTrakTime: "6.00",
      },
      song6: {
        id: "6",
        audioTrackTitle: "Shopno dekhar gaan",
        audioTrack: "/05 Shopno dekhar gaan.wav",
        audioTrakTime: "4.45",
      },
      song7: {
        id: "7",
        audioTrackTitle: "Bangladesher nam",
        audioTrack: "/04 Bangladesher nam.wav",
        audioTrakTime: "6.15",
      },
      song8: {
        id: "8",
        audioTrackTitle: "Chader gaye chad",
        audioTrack: "/08 Chader gaye chad.wav",
        audioTrakTime: "6.29",
      },
      song9: {
        id: "9",
        audioTrackTitle: "Ondho Jibon",
        audioTrack: "/07 Ondho Jibon.wav",
        audioTrakTime: "4.14",
      },
      song10: {
        id: "10",
        audioTrackTitle: "Odbhuture tumi",
        audioTrack: "/06 Odbhuture tumi.wav",
        audioTrakTime: "4.14",
      },
      song11: {
        id: "11",
        audioTrackTitle: "Declaration Of Dependence",
        audioTrack: "/11 Declaration Of Dependence.wav",
        audioTrakTime: "8.31",
      },
      song12: {
        id: "12",
        audioTrackTitle: "LikenShare",
        audioTrack: "/01 LikenShare.wav",
        audioTrakTime: "3.48",
      },
      song13: {
        id: "13",
        audioTrackTitle: "Cholo arekbar uri",
        audioTrack: "/02 Cholo arekbar uri.wav",
        audioTrakTime: "4.43",
      },
      song14: {
        id: "14",
        audioTrackTitle: "Char Dewal",
        audioTrack: "/03 Char Dewal.wav",
        audioTrakTime: "4.00",
      },
      song15: {
        id: "15",
        audioTrackTitle: "04 Har Kala",
        audioTrack: "/04 Har Kala.wav",
        audioTrakTime: "5.31",
      },
      song16: {
        id: "16",
        audioTrackTitle: "05 A shundor prithiby",
        audioTrack: "/05 A shundor prithiby.wav",
        audioTrakTime: "4.51",
      },
      song17: {
        id: "17",
        audioTrackTitle: "06 Roktim Itihas.wav",
        audioTrack: "/06 Roktim Itihas.wav",
        audioTrakTime: "4.32",
      },
      song18: {
        id: "18",
        audioTrackTitle: "Ami Akash Pathabo",
        audioTrack: "/07 Ami Akash Pathabo.wav",
        audioTrakTime: "4.03",
      },
      song19: {
        id: "19",
        audioTrackTitle: "08 Mon tore",
        audioTrack: "/08 Mon tore.wav",
        audioTrakTime: "5.25",
      },
      song20: {
        id: "20",
        audioTrackTitle: "Tobu Keno",
        audioTrack: "/09 Tobu Keno.wav",
        audioTrakTime: "2.57",
      },
      song21: {
        id: "21",
        audioTrackTitle: "Shobhbhotar khela",
        audioTrack: "/10 Shobhbhotar khela.wav",
        audioTrakTime: "4.34",
      },
    },
    Album: {
      AvoiRafaVol1: {
        albumname: "AvoiRafaVol1",
        Albumsong: [
          "song1",
          "song2",
          "song3",
          "song4",
          "song5",
          "song6",
          "song7",
          "song8",
          "song9",
          "song10",
          "song11",
        ],
      },
      AvoiRafaVol2: {
        albumname: "AvoiRafaVol2",
        Albumsong: [
          "song12",
          "song13",
          "song14",
          "song15",
          "song16",
          "song17",
          "song18",
          "song19",
          "song20",
          "song21",
        ],
      },
    },
    Albums: ["AvoiRafaVol1", "AvoiRafaVol2"],
  };

  const [playerStates, setPlayerStates] = useState(
    Array(Object.keys(SongsBank.songs).length).fill(false)
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null); // Holds the current audio source
  const [audioElement, setAudioElement] = useState(null);
  // const audioRef = useRef(new Audio());

  const handlePlayer = (index, audioSource) => {
    console.log(audioSource);
    console.log(index);
    if (currentAudio !== audioSource) {
      audioElement.pause();
      audioElement.src = audioSource;
      setCurrentAudio(audioSource);
    }

    const newPlayerStates = playerStates.map((state, i) =>
      i === index ? !state : false
    );

    setPlayerStates(newPlayerStates);
    if (newPlayerStates[index]) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  };

  useEffect(() => {
    setAudioElement(new Audio(URL));
    // only run once on the first render on the client
  }, []);
  return (
    <div className="py-10" id="album">
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        slidesPerView={1}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
        }}
        grabCursor={true}
        onSlideChange={() => {
          audioElement.pause();
          const newPlayerStates = Array(playerStates.length).fill(false);
          setPlayerStates(newPlayerStates);
        }}
        className="bg-[#161616] py-10  relative"
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <button className="image-swiper-button-prev  absolute  sm:right-[400px]  2xl:right-[550px]">
          <svg
            width="114"
            height="40"
            viewBox="0 0 114 40"
            fill="none"
            className="absolute sm:top-1 left-4 sm:left-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3_220)">
              <path
                d="M22.8248 20.3805L91.7484 20.3805M28.3584 13.5L22.2516 20.5463L28.3584 26.5356"
                stroke="white"
                strokeWidth="2"
              />
            </g>
            <rect
              x="0.5"
              y="0.5"
              width="39"
              height="113"
              rx="19.5"
              transform="matrix(8.74228e-08 1 1 -8.74228e-08 4.37114e-08 1.52151e-05)"
              stroke="#807E7E"
            />
            <defs>
              <clipPath id="clip0_3_220">
                <rect
                  width="13"
                  height="72"
                  fill="white"
                  transform="matrix(8.74228e-08 1 1 -8.74228e-08 21 13.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>

        {SongsBank.Albums.map((album, Index) => (
          <SwiperSlide key={Index}>
            <div className="bg-[#161616]">
              <div className="flex flex-col sm:flex-row justify-center py-7 md:px-[24px] 2xl:px-0   gap-x-5">
                <div className=" mx-[16px] sm:mx-0 sm:w-[500px]   border border-[#959595]">
                  <Image
                    src="/Image10.png"
                    alt="background image"
                    className=" hidden sm:block bg-blend-darken  brightness-50  object-cover"
                    width={739}
                    height={370}
                  />
                  <Image
                    src={"/Image8.png"}
                    alt="background image"
                    width={855}
                    height={855}
                    className=" block sm:hidden lg: xl: 2xl:h-[1040px]"
                  />

                  <div className="">
                    <div className="h-[270px] 2xl:h-[500px] mt-2 mr-2 overflow-y-scroll rounded-10">
                      {SongsBank.Album[album]?.Albumsong.map((song, Index) => (
                        <div
                          key={Index}
                          className="flex justify-between  mb-[16px] px-[35px] group/album group/album"
                          onClick={() =>
                            handlePlayer(
                              Index,
                              SongsBank.songs[song].audioTrack
                            )
                          }
                        >
                          <div className="flex items-center gap-[1.5rem] ">
                            <Image
                              src={
                                playerStates[Index]
                                  ? "/pushbutton1.png"
                                  : "/playbutton1.png"
                              }
                              alt="background image"
                              className=""
                              width={40}
                              height={40}
                              onClick={() =>
                                handlePlayer(
                                  Index,
                                  SongsBank.songs[song].audioTrack
                                )
                              }
                            />{" "}
                            <h1 className=" text-[#959595]   group-hover/album:text-white">
                              {SongsBank.songs[song].audioTrackTitle}
                            </h1>
                          </div>
                          <h1 className=" text-[#959595] group-hover/album:text-white ">
                            {SongsBank.songs[song].audioTrakTime}
                          </h1>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  {/* <h1 className="md:text-[86px] 2xl:text-[194px] text-white font-semibold leading-none tracking-normal">
                    {album}
                  </h1> */}
                  <Image
                    src={"/Image8.png"}
                    width={855}
                    height={855}
                    alt="ash"
                    className=" hidden sm:block  object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button className="image-swiper-button-next  absolute right-[100px] 2xl:right-[250px]">
          <svg
            width="114"
            height="40"
            viewBox="0 0 114 40"
            fill="none"
            className="relative sm:top-1 -right-16 sm:right-6 "
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_92_95)">
              <path
                d="M91.1752 19.6195L22.2516 19.6195M85.6416 26.5L91.7484 19.4537L85.6416 13.4644"
                stroke="white"
                strokeWidth="2"
              />
            </g>
            <rect
              x="-0.5"
              y="-0.5"
              width="39"
              height="113"
              rx="19.5"
              transform="matrix(0 -1 -1 0 113 39)"
              stroke="#807E7E"
            />
            <defs>
              <clipPath id="clip0_92_95">
                <rect
                  width="13"
                  height="72"
                  fill="white"
                  transform="matrix(0 -1 -1 0 93 26.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </Swiper>
    </div>
  );
}

export default Album;
