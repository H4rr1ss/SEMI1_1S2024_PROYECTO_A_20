import { TicketProps } from '@/utils/interfaces/tickets.interface';
import './ticket.css'

const TicketUI = (props: TicketProps) => {
  return (
    <div className="ticket bg-gray-100 w-11/12 h-56">
      <div className="header flex justify-between items-center w-full h-8">
        <div className="travel flex">
          <div className="icon flex ">
            <h2>{"Vuelo de "}</h2>
            <label>{props.origin}</label>
          </div>
          <div className="icon flex">
            <h2>{"a "}</h2>
            <label>{props.destination}</label>
          </div>
          <h3>{" / " + props.date}</h3>
        </div>
        <h2>{"Vuelo: " + props.typeFlight}</h2>
      </div>

      <div className="content flex justify-center items-center mt-5 h-28">
        <div className="info-l flex items-center justify-center w-2/5">
          <label>{props.boardingTime}</label>
          <div className="route">
            <div className="flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-departure" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#373737" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M14.639 10.258l4.83 -1.294a2 2 0 1 1 1.035 3.863l-14.489 3.883l-4.45 -5.02l2.897 -.776l2.45 1.414l2.897 -.776l-3.743 -6.244l2.898 -.777l5.675 5.727z" />
                <path d="M3 21h18" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-arrival" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#373737" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15.157 11.81l4.83 1.295a2 2 0 1 1 -1.036 3.863l-14.489 -3.882l-1.345 -6.572l2.898 .776l1.414 2.45l2.898 .776l-.12 -7.279l2.898 .777l2.052 7.797z" />
                <path d="M3 21h18" />
              </svg>
            </div>
            <div className="line"></div>
          </div>
          <label>{props.arrivalTime}</label>
        </div>
        <div className="line"></div>
        <div className="info-c flex flex-col justify-center items-center w-1/5">
          <div className='w-36'>
            <h2>Codigo de reserva</h2>
            <label>{props.id}</label>
          </div>
          <div className='w-36'>
            <h2>Apellido</h2>
            <label style={{ textTransform: 'uppercase' }}>{props.lastName}</label>
          </div>
        </div>
        <div className="line"></div>
        <div className="info-r flex items-center justify-center w-1/12">
          <label>{"Q. " + props.flightPrice}</label>
        </div>
      </div>
      <div className="footer flex mt-3 justify-center items-center w-full">
        <label>Check-In</label>
        {props.check ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-rounded-check" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#373737" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 12l2 2l4 -4" />
            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-rounded-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#373737" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 10l4 4m0 -4l-4 4" />
            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
          </svg>
        )}
      </div>
    </div>
  )
};

export default TicketUI;