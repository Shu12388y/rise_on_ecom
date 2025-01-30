// "use client";

// import { useState } from "react";
// import {
//   Select,
//   SelectItem,
//   SelectTrigger,
//   SelectContent,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardHeader, CardContent } from "@/components/ui/card";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { format } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"
 
// import { cn } from "@/lib/utils"

// const OrderMetrics = () => {
//   const [interval, setInterval] = useState("");
//   const [granularity, setGranularity] = useState("Total");
//   const [buyerType, setBuyerType] = useState("All");
//   const [firstDayOfWeek, setFirstDayOfWeek] = useState("Monday");
//   const [data, setData] = useState([]);
//   const [date, setDate] = useState<Date | undefined>(new Date());

//   const fetchOrderMetrics = () => {
//     // Here we mock the data based on the filter criteria.
//     // In a real application, replace this with actual API logic.

//     const dummyData = [
//       { date: "2023-09-01", total: 100, b2b: 60, b2c: 40 },
//       { date: "2023-09-02", total: 150, b2b: 90, b2c: 60 },
//       { date: "2023-09-03", total: 120, b2b: 70, b2c: 50 },
//       { date: "2023-09-04", total: 110, b2b: 65, b2c: 45 },
//     ];

//     // Apply filters here (for now, just a simple filter based on buyerType and granularity)
//     const filteredData = dummyData.filter((item) => {
//       if (buyerType !== "All" && item[buyerType.toLowerCase()] === undefined) {
//         return false;
//       }
//       return true;
//     });

//     setData(filteredData);
//   };

//   return (
//     <div className="h-screen p-8 bg-white">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold">Returns Aggregated Order Metrics</h1>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         <div>
//           <label className="block mb-2 text-sm">Interval</label>
//           <Input
//             type="text"
//             value={interval}
//             onChange={(e) => setInterval(e.target.value)}
//             placeholder="e.g., 2023-09-01T00:00:00-07:00--2023-09-04T00:00:00-07:00"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 text-sm">Date</label>
//           <Popover>
//             <PopoverTrigger asChild>
//                <Button
//                 variant={"outline"}
//                 className={cn(
//                   "w-[280px] justify-start text-left font-normal",
//                   !date && "text-muted-foreground"
//                   )}
//                   >
//                 <CalendarIcon className="mr-2 h-4 w-4" />
//                 {date ? format(date, "PPP") : <span>Pick a date</span>}
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0">
//               <Calendar
//                 mode="single"
//                 selected={date}
//                 onSelect={setDate}
//                 initialFocus
//               />
//             </PopoverContent>
//           </Popover>
//         </div>

//         <div>
//           <label className="block mb-2 text-sm">Granularity</label>
//           <Select value={granularity} onValueChange={setGranularity}>
//             <SelectTrigger>
//               <span>{granularity}</span>
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="Total">Total</SelectItem>
//               <SelectItem value="Day">Day</SelectItem>
//               <SelectItem value="Hour">Hour</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div>
//           <label className="block mb-2 text-sm">Buyer Type</label>
//           <Select value={buyerType} onValueChange={setBuyerType}>
//             <SelectTrigger>
//               <span>{buyerType}</span>
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="All">All</SelectItem>
//               <SelectItem value="B2B">B2B</SelectItem>
//               <SelectItem value="B2C">B2C</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div>
//           <label className="block mb-2 text-sm">First Day of Week</label>
//           <Select value={firstDayOfWeek} onValueChange={setFirstDayOfWeek}>
//             <SelectTrigger>
//               <span>{firstDayOfWeek}</span>
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="Monday">Monday</SelectItem>
//               <SelectItem value="Sunday">Sunday</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       <Button onClick={fetchOrderMetrics} className="mb-6">
//         Fetch Order Metrics
//       </Button>

//       {data.length > 0 && (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Metrics Data</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {data.map((item, index) => (
//               <Card key={index}>
//                 <CardHeader>
//                   <h3 className="text-lg font-medium">{item.date}</h3>
//                 </CardHeader>
//                 <CardContent>
//                   <div>Total: {item.total}</div>
//                   <div>B2B: {item.b2b}</div>
//                   <div>B2C: {item.b2c}</div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderMetrics;


import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page