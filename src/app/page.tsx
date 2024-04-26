"use client";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PassengersSchema from "@/schema/passengerSchema";
import Image from "next/image";
import users from "/public/usres.png";
import user from "/public/user.svg"
import add from "/public/add.svg";

export default function Home() {
  const form = useForm<z.infer<typeof PassengersSchema>>({
    resolver: zodResolver(PassengersSchema),
    defaultValues: {
      passengers: [
        {
          firstName: "",
          lastName: "",
          gender: "",
          birthDay: {
            day: "",
            month: "",
            year: "",
          },
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
    <form className="  p-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="my-3">
        <h2 className="font-sans font-bold text-gray-600 text-xl flex">
          <Image src={users} width={25} height={25} alt="مشخصات مسافران" />
          <p className="pr-2">مشخصات مسافران</p>
        </h2>
      </div>
      <div className="flex justify-between my-10">
        <div>
          <button
            disabled
            className="border border-gray-500 text-gray-500 px-4 py-2 rounded-3xl hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <p>بزرگسال</p>
          </button>
        </div>
        <div className="flex items-center align-middle">
        <Image src={user} width={25} height={25} alt="مشخصات مسافران" />

          <p className="text-blue-500 cursor-pointer pr-3">انتخاب مسافران سابق</p>
        </div>
      </div>
      <ul className="flex flex-wrap flex-grow row-span-3">
        {fields.map((item, index) => (
          <li
            className="flex flex-col align-text-top flex-grow justify-between mt-5"
            key={item.id}
          >
            <div className="flex flex-wrap flex-row align-text-top flex-grow justify-between mt-5">
              <div className="flex flex-col w-80">
                {/* <label
                  className="block text-sm font-medium text-gray-700 mb-4"
                  htmlFor="firstName"
                >
                  نام(فارسی)
                </label> */}
                <Controller
                  name={`passengers.${index}.firstName`}
                  control={control}
                  render={({ field }) => (
                    <input
                      placeholder=" نام(فارسی)"
                      type="text"
                      className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
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
              <div className="flex flex-col w-80">
                {/* <label
                  className="block text-sm font-medium text-gray-700 mb-4"
                  htmlFor="lastName"
                >
                  نام خانوادگی(فارسی)
                </label> */}
                <Controller
                  name={`passengers.${index}.lastName`}
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      placeholder=" نام خانوادگی(فارسی)"
                      className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
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
              <div className="flex flex-col w-80">
                {/* <label
                  className="block text-sm font-medium text-gray-700 mb-4"
                  htmlFor="gender"
                >
                  جنسیت
                </label> */}
                <Controller
                  name={`passengers.${index}.gender`}
                  control={control}
                  render={({ field }) => (
                    <select
                      placeholder="جنسیت"
                      defaultValue=""
                      className="placeholder-shown: border bg-white border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                      {...field}
                    >
                      <option value="" disabled hidden>
                        جنسیت
                      </option>
                      <option value="male">مرد</option>
                      <option value="female">زن</option>
                    </select>
                  )}
                />
                <small className="text-red-400">
                  {errors.passengers
                    ? errors.passengers[index]?.gender?.message
                    : null}
                </small>
              </div>
              <div className="flex flex-col w-80">
                {/* <label
                  className="block text-sm font-medium text-gray-700 mb-4"
                  htmlFor="nationalCode"
                >
                  کدملی
                </label> */}
                {/*   برای کد ملی یه کد جاوااسکریپتی دارم که معتبر بودن کدملی رو میسنجه ولی الان استفاده نکردم ولی میشه در شما اضافه کرد  */}
                <Controller
                  name={`passengers.${index}.nationalCode`}
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      placeholder="کدملی"
                      className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
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
              <div className="flex flex-col w-80 mt-12">
                <label
                  className="block text-sm font-medium text-gray-700 mb-4"
                  htmlFor="birthDay"
                >
                  تاریخ تولد
                </label>
                <Controller
                  name={`passengers.${index}.birthDay`}
                  control={control}
                  render={({ field }) => (
                    <div className="flex flex-row w-72 border border-gray-300  rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200">
                      <Controller
                        name={`passengers.${index}.birthDay.day`}
                        control={control}
                        render={({ field }) => (
                          <select
                            style={{ width: "100px" }}
                            placeholder="روز"
                            defaultValue=""
                            className="border-l-2 rounded-lg bg-white text-gray-400"
                            {...field}
                          >
                            <option value="" disabled hidden>
                              روز
                            </option>
                            {[...Array(31)].map((_, index) => (
                              <option key={index + 1} value={index + 1}>
                                {index + 1}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                      <Controller
                        name={`passengers.${index}.birthDay.month`}
                        control={control}
                        render={({ field }) => (
                          <select
                            style={{ width: "100px" }}
                            placeholder="ماه"
                            defaultValue=""
                            className="border-l-2 p-2 bg-white text-gray-400"
                            {...field}
                          >
                            <option value="" disabled hidden>
                              ماه
                            </option>
                            {[...Array(12)].map((_, index) => (
                              <option key={index + 1} value={index + 1}>
                                {index + 1}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                      <Controller
                        name={`passengers.${index}.birthDay.month`}
                        control={control}
                        render={({ field }) => (
                          <select
                            style={{ width: "100px" }}
                            placeholder="سال"
                            defaultValue=""
                            className=" p-2 rounded-lg bg-white text-gray-400"
                            {...field}
                          >
                            <option value="" disabled hidden>
                              سال
                            </option>
                            {[...Array(1405 - 1209 + 1)].map((_, index) => (
                              <option key={1209 + index} value={1209 + index}>
                                {1209 + index}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                    </div>
                  )}
                />
                <small className="text-red-400">
                  {errors.passengers
                    ? errors.passengers[index]?.birthDay?.day?.message
                    : null}
                </small>
              </div>
              {/* This empty div ensures that the next element starts on a new row */}
              <div className="justify-center flex flex-col mt-7 ">
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
                  color="failure"
                  type="button"
                  onClick={() => remove(index)}
                >
                  پاک کردن
                </button>
              </div>
            </div>
            <div className="border-t w-full  border-gray-300 my-12" />
          </li>
        ))}
      </ul>
      <button
        className="border items-center flex border-blue-500 hover:bg-blue-100 text-blue-600 font-bold py-2 px-4 rounded-lg ml-3"
        disabled={fields.length >= 5}
        type="button"
        onClick={() =>
          append({
            firstName: "",
            lastName: "",
            gender: "",
            nationalCode: "",
            birthDay: {
              day: "",
              month: "",
              year: "",
            },
          })
        }
      >
          <Image src={add} width={20} height={20} alt="مشخصات مسافران" />
        <p className="pr-2">
        اضافه کردن مسافر جدید
        </p>
      </button>

      {/* <button
        className="border border-gray-500 text-gray-500 px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        type="submit"
      >
        ثبت
      </button> */}
    </form>
  );
}
