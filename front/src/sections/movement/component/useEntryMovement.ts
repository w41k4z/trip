// import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useActivity from "../../activity/useActivity";

const useEntryMovement = () => {
  const { activities } = useActivity();
  const {
    register,
    handleSubmit,
    // formState: { errors, isSubmitting },
    reset,
  } = useForm();

  return { register, handleSubmit, activities, reset };
};

export default useEntryMovement;
