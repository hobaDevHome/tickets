import Link from "next/link";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import DeleteBlock from "./DeleteBlock";

// const TicketCard = ({ ticket }) => {
const TicketCard = () => {
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  // const createdDateTime = formatTimestamp(ticket.createdAt);
  const createdDateTime = formatTimestamp(new Date().day);

  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        {/* <PriorityDisplay priority={ticket.priority} /> */}
        <PriorityDisplay />
        <div className="ml-auto">
          {/* <DeleteBlock id={ticket._id} /> */}
          <DeleteBlock id="new" />
        </div>
      </div>
      {/* <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}> */}
      <Link href={`/TicketPage/new`} style={{ display: "contents" }}>
        {/* <h4 className="mb-1">{ticket.title}</h4> */}
        <h4 className="mb-1">Title</h4>
        <hr className="h-px  border-0 bg-page mb-2 "></hr>
        {/* <p className="whitespace-pre-wrap">{ticket.description}</p> */}
        <p className="whitespace-pre-wrap">ticket.description</p>

        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1">{createdDateTime}</p>
            {/* <ProgressDisplay progress={ticket.progress} /> */}
            <ProgressDisplay progress={50} />
          </div>
          <div className="ml-auto  flex items-end">
            {/* <StatusDisplay status={ticket.status} /> */}
            <StatusDisplay status="started" statu />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
