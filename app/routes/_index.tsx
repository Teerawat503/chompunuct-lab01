import type { MetaFunction } from "@remix-run/node";
import ShowBook from "./ShowBook";

export const meta: MetaFunction = () => {
  return [
    { title: "BookOnlineChompu" },
    { name: "description", content: "Welcome to BookOnlineChompu" },
  ];
};

export default function Index() {
  return (
   <>
   <ShowBook />
   </>
  );
}
