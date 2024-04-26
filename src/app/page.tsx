"use client";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PassengersSchema from "@/schema/passengerSchema";

export default function Home() {
  const form = useForm<z.infer<typeof PassengersSchema>>({
    resolver: zodResolver(PassengersSchema),
    defaultValues: {
      passengers: [
        {
          firstName: "",
          lastName: "",
          gender: "",
          birthDay: "",
          nationalCode: "",
        },
      ],
    },
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "passengers",
  });
  function onSubmit(values: z.infer<typeof PassengersSchema>) {
    console.log(values);
  }

  return (
    <form className="w-90 p-5" onSubmit={handleSubmit(onSubmit)}>
      <ul className="flex flex-wrap flex-grow row-span-3">
        {fields.map((item, index) => (
          <li
            className="flex flex-col  align-text-top flex-grow justify-between mt-5"
            key={item.id}
          >
            <div className="flex flex-row align-text-top flex-grow justify-between mt-5">
              <h4 className="block">{`مسافر #${index + 1}`}</h4>
              <hr></hr>
              <div className="">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="firstName"
                >
                  نام(فارسی)
                </label>
                <Controller
                  name={`passengers.${index}.firstName`}
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                      {...field}
                    />
                  )}
                />
                <small className="text-red-400">
                  {errors.passengers
                    ? errors.passengers[index]?.firstName?.message
                    : null}
                </small>
              </div>
              <div className="">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="lastName"
                >
                  نام خانوادگی(فارسی)
                </label>
                <Controller
                  name={`passengers.${index}.lastName`}
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                      {...field}
                    />
                  )}
                />
                <small className="text-red-400">
                  {errors.passengers
                    ? errors.passengers[index]?.lastName?.message
                    : null}
                </small>
              </div>
              <div className="d-flex ">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="gender"
                >
                  جنسیت
                </label>
                <Controller
                  name={`passengers.${index}.gender`}
                  control={control}
                  render={({ field }) => (
                    <select {...field}>
                      <option value="male">زن</option>
                      <option value="female">مرد</option>
                    </select>
                  )}
                />
                <small className="error">
                  {errors.passengers
                    ? errors.passengers[index]?.gender?.message
                    : null}
                </small>
              </div>
              <div className="">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="nationalCode"
                >
                  کدملی
                </label>
                {/*   برای کد ملی یه کد جاوااسکریپتی دارم که معتبر بودن کدملی رو میسنجه ولی الان استفاده نکردم  */}
                <Controller
                  name={`passengers.${index}.nationalCode`}
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                      {...field}
                    />
                  )}
                />
                <small className="text-red-400">
                  {errors.passengers
                    ? errors.passengers[index]?.nationalCode?.message
                    : null}
                </small>
              </div>
              <div className="">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="birthDay"
                >
                  تاریخ تولد
                </label>
                <Controller
                  name={`passengers.${index}.birthDay`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="text"
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                      {...field}
                    />
                  )}
                />
                <small className="text-red-400">
                  {errors.passengers
                    ? errors.passengers[index]?.birthDay?.message
                    : null}
                </small>
              </div>

              <button
                className="px-2 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
                color="failure"
                type="button"
                onClick={() => remove(index)}
              >
                پاک کردن
              </button>
            </div>
            <div className="border-t w-full  border-gray-300 my-4" />
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-1 mr-5"
        disabled={fields.length >= 5}
        type="button"
        onClick={() =>
          append({
            firstName: "",
            lastName: "",
            gender: "",
            nationalCode: "",
            birthDay: "",
          })
        }
      >
        اضافه کردن
      </button>

      <button
        className="border border-gray-500 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        type="submit"
      >
        ثبت
      </button>
    </form>
  );
}
