import React from "react";
import SideLayout2 from "@/components/SideLayout2";

const Terms = () => {
  return (
    <SideLayout2>
      <div className="ml-5 mt-2 ">
        <div>
          <h1 className="text-5xl font-medium">
            Terms of Services - WorthWhile
          </h1>
          <div className="my-14">
            <h1 >
              The Services (as defined herein) and Terms of Use are provided by
              WorthWhile.
            </h1>
            <h1 className="font-medium mt-5">
              ANY USERS WHO DO NOT AGREE WITH THESE TERMS OF USE SHOULD NOT USE
              THE SERVICES! THIS AGREEMENT CONTAINS, AMONG OTHER THINGS, AN
              ARBITRATION PROVISION CONTAINING A CLASS ACTION WAIVER.
            </h1>
          </div>
        </div>

        <div>
          <ul className="space-y-4 list-disc list-inside ">
            <li>
              List item one
              <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside">
                <li>You might feel like you are being really "organized" o</li>
                <li>
                  Nested navigation in UIs is a bad idea too, keep things as
                  flat as possible.
                </li>
                <li>
                  Nesting tons of folders in your source code is also not
                  helpful.
                </li>
              </ol>
            </li>
            <li>
              List item two
              <ul className="pl-5 mt-2 space-y-1 list-decimal list-inside">
                <li>
                  I'm not sure if we'll bother styling more than two levels
                  deep.
                </li>
                <li>
                  Two is already too much, three is guaranteed to be a bad idea.
                </li>
                <li>If you nest four levels deep you belong in prison.</li>
              </ul>
            </li>
            <li>
              List item three
              <ul className="pl-5 mt-2 space-y-1 list-decimal list-inside">
                <li>Again please don't nest lists if you want</li>
                <li>Nobody wants to look at this.</li>
                <li>I'm upset that we even have to bother styling this.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </SideLayout2>
  );
};

export default Terms;
