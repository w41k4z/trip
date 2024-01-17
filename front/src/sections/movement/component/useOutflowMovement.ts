// import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useTravel from "../../travel/useTravel";

const useOutflowMovement = () => {
  const { travels } = useTravel();
  const {
    register,
    handleSubmit,
    // formState: { errors, isSubmitting },
    reset,
  } = useForm();

  return { register, handleSubmit, travels, reset };
};

export default useOutflowMovement;
