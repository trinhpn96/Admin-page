import { HiSearch } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiFolderUserLine } from "react-icons/ri";

import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import GlobalSpinner from "../../../components/common/GlobalSpinner";
import { getOrder,deleteOrderById } from "../../../../services/adminService";

const Orders = () => {

  let orderData = [];

  const [orders, setOrders] = useState([]);
  const totalOrders = orders.length;

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const totalPage = Math.ceil(totalOrders / ordersPerPage);

  const handleClick = (isBack) => {
    if (isBack) {
      if (currentPage >= 2) {
        setCurrentPage(currentPage - 1);
      }
    } else {
      {
        if (currentPage < totalPage) {
          setCurrentPage(currentPage + 1);
        }
      }
    }
  };

  useEffect(() => {
    const crrPageIndex = currentPage - 1;
    const startIndex = crrPageIndex * ordersPerPage;

    // setOrders(orders.slice(startIndex, startIndex + ordersPerPage));
  }, [currentPage]);

  const onSearch = (e) => {
    e.preventDefault();
    let keyword = document.getElementById("search-area").value;
    if (!keyword || keyword.length === 0) {
      window.location.reload();
      return;
    }
    keyword = keyword.toLowerCase();
    let filters = Object.keys(orders[0]);

    //--------Search
    var filtered_data = orders.filter(function (item) {
      for (let i = 0; i < filters.length; i++) {
        switch (typeof item[filters[i]]) {
          case "string":
            if (item[filters[i]].toLowerCase().includes(keyword)) {
              return true;
            }
            break;
          default:
            if (item[filters[i]] == keyword) {
              return true;
            }
        }
      }
      return false;
    });
    setOrders(filtered_data);
    setCurrentPage(1);
  };

  const {  isLoading ,refetch} = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrder(),
    fetchPolicy: 'network-only' ,
    notifyOnNetworkStatusChange:true,
    onSuccess:(data)=>{
      orderData = data?.data?.orders || [];
      setOrders(orderData);
    }
  },
  );

  

  if (isLoading) return <GlobalSpinner />;
  
  
  return (
    <div>
      {/* Container */}
      <div className=" max-w-screen-xl mx-auto px-4 py-6">
        {/* Layout */}
        <div>
          {/* Content */}
          {/* ACCOUNT INFO */}
          <div className="flex items-center justify-end">
            <span className=" text-sm font-bold text-teal-600 border-l-gray-200 border-l-2 px-4">
              Rosie P
            </span>
            <div>
              <img
                src="https://i.pinimg.com/280x280_RS/e9/1d/06/e91d062f1c0708a9b1f0f1880a3d8f19.jpg"
                alt="profilepic"
                className=" aspect-square w-10 rounded-full border-spacing-2 p-[2px] border-slate-200 border-2"
              />
            </div>
          </div>

          {/* SEARCH AREA */}
          <div className="mb-4">
            <form class="flex items-center">
              <label for="search-area" class="sr-only">
                Search
              </label>
              <div class="relative max-w-screen-sm">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 ">
                  <HiSearch className="text-xl" />
                </div>
                <input
                  type="text"
                  id="search-area"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 "
                  placeholder="Search"
                  required
                />
              </div>
              <button
                onClick={onSearch}
                class="p-2.5 ml-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:cursor-pointer hover:bg-teal-500/50 focus:ring-4 focus:outline-none focus:ring-teal-300"
              >
                <HiSearch className="text-xl" />
                <span class="sr-only">Search</span>
              </button>
            </form>
          </div>

          {/* TABLE */}
          <div>
            <div className="overflow-x-auto">
              <table className="table table-compact w-full border-2">
                <thead>
                  <tr>
                    <th className=" py-6 pl-4">No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Room</th>
                    <th>Check-in</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders
                    .slice(
                      (currentPage - 1) * ordersPerPage,
                      (currentPage - 1) * ordersPerPage + ordersPerPage
                    )
                    .map((order) => {
                      const rooms = Object.values(JSON.parse(order?.rooms));
                      return (
                        <tr key={order.id}>
                          <th className="py-4 pl-4">{order.id}</th>
                          <td>{order.name}</td>
                          <td>{order.email}</td>
                          <td>{order.phone}</td>
                          <td>{rooms[0].title}</td>
                          <td>{order.checkinDay}</td>
                          <td className="">
                            <div className="flex gap-2 items-center">
                              <div className="group">
                                <div
                                  className="hidden tooltip tooltip-open tooltip-success group-hover:block"
                                  data-tip="Order Detail"
                                ></div>
                                <RiFolderUserLine className="cursor-pointer text-2xl text-teal-500 " />
                              </div>
                              <div className="group">
                                <div
                                  className="hidden tooltip tooltip-open tooltip-error group-hover:block"
                                  data-tip="Delete"
                                ></div>
                                <BsTrash onClick={async (e)=>{
                                  await deleteOrderById(order.id);
                                  refetch();
                                }} className="cursor-pointer text-xl text-red-500" />
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
          </div>
          {/* PAGINATION */}
          <div className="flex justify-end gap-8 p-4 ">
            <span className="text-sm text-zinc-500 pr-4">
              {(currentPage - 1) * ordersPerPage + 1} -{" "}
              {(currentPage - 1) * ordersPerPage + ordersPerPage} of{" "}
              {totalOrders}
            </span>
            <div className="flex gap-4 group">
              <IoIosArrowBack
                onClick={() => {
                  handleClick(true);
                }}
                className={`text-xl group-hover:cursor-pointer ${currentPage === 1
                    ? "text-gray-400 dark:text-gray-500/70 group-hover:cursor-not-allowed"
                    : ""
                  } `}
              />
              <IoIosArrowForward
                onClick={() => {
                  handleClick(false);
                }}
                className={`text-xl group-hover:cursor-pointer ${currentPage === totalPage
                    ? "text-gray-400 dark:text-gray-500/70 group-hover:cursor-not-allowed"
                    : ""
                  } `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
