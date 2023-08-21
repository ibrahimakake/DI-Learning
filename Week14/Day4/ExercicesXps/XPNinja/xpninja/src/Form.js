/*import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {Input }from "./Input";
//import cn from 'classnames';
export const Form = () => {
    const methods = useForm()
  
    const onSubmit = methods.handleSubmit(data => {
      console.log(data)
    })
  
    return (
      <FormProvider {...methods}>
        <form
          onSubmit={e => e.preventDefault()}
          noValidate
          className="container"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="name"
              type="text"
              id="name"
              placeholder="type your name..."
            />
            <Input
              label="password"
              type="password"
              id="password"
              placeholder="type your password..."
            />
          </div>
          <div className="mt-5">
            <button
              onClick={onSubmit}
              className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
            >
            
              Submit Form
            </button>
          </div>
        </form>
      </FormProvider>
    )
  }*/
  import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "./Input";

const Form = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} noValidate className="container">
        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label="name"
            type="text"
            id="name"
            placeholder="Type your name..."
          />
          <Input
            label="password"
            type="password"
            id="password"
            placeholder="Type your password..."
          />
        </div>
        <div className="mt-5">
          <button
            type="submit" /* Added type="submit" to make the button trigger form submission */
            className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
          >
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;

  