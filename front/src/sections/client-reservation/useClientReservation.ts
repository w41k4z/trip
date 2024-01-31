// import { useState, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import useClient from "../client/useClient";
import useTravel from "../travel/useTravel";

const useClientReservation = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "reservations",
  });
  const { clients } = useClient();
  const { travels } = useTravel();

  return {
    fields,
    append,
    remove,
    register,
    handleSubmit,
    reset,
    clients,
    travels,
    errors,
    isSubmitting,
    setError,
  };
};

export default useClientReservation;
