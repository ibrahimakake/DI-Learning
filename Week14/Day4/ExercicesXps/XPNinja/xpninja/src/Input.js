/*import React from "react";
//import cn from 'classnames';
//import { findInputError, isformInvalid } from ' . ./utils';
import { useFormContext } from 'react-hook-form' ;
import { AnimatePresence, motion} from 'framer-motion';
import { MdError } from 'react-icons/md'
import { findInputError, isFormInvalid } from '../utils'

  export const Input = ({ label, type, id, placeholder }) => {
    const {
      register,
      formState: { errors },
    } = useFormContext()
  
    const inputError = findInputError(errors, label)
    const isInvalid = isFormInvalid(inputError)
  
    return (
      <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between">
          <label htmlFor={id} className="font-semibold capitalize">
            {label}
          </label>
          <AnimatePresence mode="wait" initial={false}>
            {isInvalid && (
              <InputError
                message={inputError.error.message}
                key={inputError.error.message}
              />
            )}
          </AnimatePresence>
        </div>
        <input
          id={id}
          type={type}
          className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
          placeholder={placeholder}
          {...register(label, {
            required: {
              value: true,
              message: 'required',
            },
          })}
        />
      </div>
    )
  }*/

  import React from "react";
import { useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { MdError } from 'react-icons/md';
import { findInputError, isFormInvalid } from '../utils';

// Assuming the InputError component is implemented separately

const Input = ({ label, type, id, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <input
        id={id}
        type={type}
        className={`w-full p-5 font-medium border rounded-md ${
          isInvalid ? 'border-red-500' : 'border-slate-300'
        } placeholder:opacity-60`}
        placeholder={placeholder}
        {...register(label, {
          required: {
            value: true,
            message: 'Required',
          },
        })}
      />
    </div>
  );
};

export default Input;
