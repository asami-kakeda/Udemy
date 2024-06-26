import FullCalendar from "@fullcalendar/react";
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import jaLocale from "@fullcalendar/core/locales/ja";
import "../calender.css";
import { DatesSetArg, EventContentArg } from "@fullcalendar/core";
import { calculateDailyBalances } from "../utils/financeCalculations";
import { Balance, CalenderContent, Transaction } from "../types";
import { formatCurrency } from "../utils/formatting";

interface CalenderProps {
  monthlyTransactions: Transaction[];
  setCurrentMont: React.Dispatch<React.SetStateAction<Date>>;
}

const Calender = ({ monthlyTransactions, setCurrentMont }: CalenderProps) => {
  const events = [
    {
      title: "Meeting",
      start: new Date(),
      income: 300,
      expense: 200,
      balance: 200,
    },
  ];

  const dailyBalances = calculateDailyBalances(monthlyTransactions);

  // const dailyBalances = {
  //   '2024-06-26': {
  //     income: 1000,
  //     expense: 500,
  //     balance: 500
  //   }
  // };

  //Fullcalender用のイベントを生成する関数
  const createCalenderEvents = (
    dailyBalances: Record<string, Balance>
  ): CalenderContent[] => {
    return Object.keys(dailyBalances).map((date) => {
      const { income, expense, balance } = dailyBalances[date];
      return {
        start: date,
        income: formatCurrency(income),
        expense: formatCurrency(expense),
        balance: formatCurrency(balance),
      };
    });
  };

  const carenderEvents = createCalenderEvents(dailyBalances);

  const renderEventContent = (eventInfo: EventContentArg) => {
    console.log(eventInfo);
    return (
      <div>
        <div className="money" id="event-income">
          {eventInfo.event.extendedProps.income}
        </div>

        <div className="money" id="event-expense">
          {eventInfo.event.extendedProps.expense}
        </div>

        <div className="money" id="event-balance">
          {eventInfo.event.extendedProps.balance}
        </div>
      </div>
    );
  };

  const handleDateSet = (datesetInfo: DatesSetArg) => {
    setCurrentMont(datesetInfo.view.currentStart);
  };

  return (
    <FullCalendar
      locale={jaLocale}
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={carenderEvents}
      eventContent={renderEventContent}
      datesSet={handleDateSet}
    />
  );
};

export default Calender;
