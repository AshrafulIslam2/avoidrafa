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
        id: "8",
        audioTrackTitle: "Rain_RAN",
        audioTrack: "/avoidrafa_and-rain.mp3",
        audioTrakTime: "4.35",
      },
      song2: {
        id: "1",
        audioTrackTitle: "Chader gaye chad",
        audioTrack: "/02.Chader_Gaye_Chad-avoidRafa_FusionBD.Com.mp3",
        audioTrakTime: "5.35",
      },
      song3: {
        id: "2",
        audioTrackTitle: "Bhaar",
        audioTrack: "/01.Bhaar-avoidRafa_FusionBD.Com.mp3",
        audioTrakTime: "3.30",
      },
      song4: {
        id: "3",
        audioTrackTitle: "Declaration Of Dependence",
        audioTrack: "/08.Shobuj_Kolponay-avoidRafa_FusionBD.Com.mp3",
        audioTrakTime: "7.15",
      },
      song5: {
        id: "4",
        audioTrackTitle: "Koshto",
        audioTrack: "/04.Koshto-avoidRafa_FusionBD.Com.mp3",
        audioTrakTime: "4.10",
      },
      song6: {
        id: "5",
        audioTrackTitle: "Liberty",
        audioTrack: "/05.Liberty-avoidRafa_FusionBD.Com.mp3",
        audioTrakTime: "3.00",
      },
      song7: {
        id: "6",
        audioTrackTitle: " Odbhuture tumi",
        audioTrack: "/06.Odhvuture_Tumi-avoidRafa_FusionBD.Com.mp3",
        audioTrakTime: "2.59",
      },
      song8: {
        id: "7",
        audioTrackTitle: "ShobujKolponay",
        audioTrack: "/08.Shobuj_Kolponay-avoidRafa_FusionBD.Com.mp3",
        audioTrakTime: "6.45",
      },
    },
    Album: {
      AvoiRafaVol1: {
        albumname: "AvoiRafaVol1",
        Albumsong: ["song3", "song2", "song4", "song5", "song7"],
      },
      AvoiRafaVol2: {
        albumname: "AvoiRafaVol2",
        Albumsong: ["song7", "song8", "song5", "song4", "song3"],
      },
      AvoiRafaVol3: {
        albumname: "AvoiRafaVol3",
        Albumsong: ["song6", "song7", "song8", "song1", "song2"],
      },
      AvoiRafaVol4: {
        albumname: "AvoiRafaVol4",
        Albumsong: ["song5", "song4", "song1", "song2", "song3"],
      },
    },
    Albums: [
      "AvoiRafaVol1",
      "AvoiRafaVol2",
      "AvoiRafaVol3",
      "AvoiRafaVol4",
      "AvoiRafaVol4",
    ],
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
        <button className="image-swiper-button-prev  absolute right-[400px]  2xl:right-[550px]">
          <svg
            width="114"
            height="40"
            viewBox="0 0 114 40"
            fill="none"
            className="absolute "
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
                <div className="w-[500px]   2xl:h-[1036px] border border-[#959595]">
                  <Image
                    src="/Image10.png"
                    alt="background image"
                    className=" bg-blend-darken  brightness-50  object-cover"
                    width={739}
                    height={370}
                  />

                  <div className="">
                    <div className="h-[270px] mt-2 mr-2 overflow-y-scroll rounded-10">
                      {SongsBank.Album[album].Albumsong.map((song, Index) => (
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
                    className="lg: xl: 2xl:h-[1040px]"
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
            className="relative top-0 right-4"
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
