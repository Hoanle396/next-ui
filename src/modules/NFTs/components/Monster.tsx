import Button from "@/components/Button";
import Flightfrom from "@/icons/Flightfrom";
import Write from "@/icons/Write";
import { FCC } from "@/types";
import React from "react";

type Props = {};

const Monster: FCC = (props: Props) => {
  return (
    <div>
      <div className="h-full w-full min-h-[calc(100vh-128px)] items-center pt-16 flex justify-between">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 xl:col-span-5 items-center lg:items-start">
            <div className="flex flex-col w-full xl:w-fit items-center gap-6">
              <div className="text-white text-center font-bold text-[42px] xl:text-[71px] uppercase">
                Discover, find, <br className="hidden xl:block" />
                <div
                  className="text-transparent bg-[linear-gradient(180deg,rgba(226,80,229,0.86)0%,#4B50E6),linear-gradient(0deg,#FFFFFF,#FFFFFF)] text-[#3D054A]"
                  style={{
                    WebkitTextStroke: "1px transparent",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Sell extraordinary
                </div>
                Monster NFTs
              </div>
              <p className="text-[23px] text-white text-center uppercase">
                Marketplace for monster character cllections non fungible token
                NFTs
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex flex-row items-center gap-4">
                  <Button className="text-lg px-4">
                    <div className="flex gap-2 justify-center items-center">
                      <Flightfrom width={28} height={28} />
                      Explore
                    </div>
                  </Button>
                  <Button className="text-lg px-4">
                    <div className="flex gap-2 justify-center items-center">
                      <Write width={28} height={28} />
                      Create
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex col-span-12 xl:col-span-7 items-center justify-center ">
            <img src="/images/Group45.png" alt="bear" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monster;
