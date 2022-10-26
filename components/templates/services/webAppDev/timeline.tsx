import { NextPage } from "next";
import { Timeline, Button } from "flowbite-react";
import { WebAppSchema } from "../../../../utils/config/schemas/webAppSchema";

const WebDevTimeline: NextPage = () => {
  return (
    <div className="">
      <div className="px-4 mx-auto py-14 max-w-9xl sm:px-6 font-poppins">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl">
            {WebAppSchema.timeline.header}
          </h1>
        </div>

        <div className="max-w-lg mx-auto lg:pt-20">
          <Timeline>
            {WebAppSchema.timeline.items.map((item: any, i: number) => (
              <Timeline.Item key={i}>
                <Timeline.Point />
                <Timeline.Content className="p-4 shadow-lg bg-slate-300 rounded-xl">
                  <Timeline.Title className=" text-CoolBlack">
                    {item.title}
                  </Timeline.Title>
                  <Timeline.Body>{item.text}</Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};
export default WebDevTimeline;
