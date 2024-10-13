"use client";

import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { z } from "zod";
import React from "react";

import { subtitle, title } from "@/components/primitives";

const FormSchema = z.object({
  subject: z.string().min(5, "Min. 5 characters"),
  name: z.string().min(5, "Min. 5 characters"),
  email: z.string().email("Invalid email address").min(7, "Min. 7 characters"),
  phoneNumber: z.string().min(10, "Min. 10 characters"),
  companyName: z.string().min(5, "Min. 5 characters"),
  projectDescription: z.string().min(20, "Min. 20 characters"),
  projectBudget: z.string().min(1, "You must select a Project Budget"),
  projectDeadline: z.string().min(1, "You must select a Project Deadline"),
});

type ErrorMessages = {
  subject?: string[];
  name?: string[];
  email?: string[];
  phoneNumber?: string[];
  companyName?: string[];
  projectDescription?: string[];
  projectBudget?: string[];
  projectDeadline?: string[];
};

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    subject: "",
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    projectDescription: "",
    projectBudget: "",
    projectDeadline: "",
  });

  const [errors, setErrors] = React.useState<ErrorMessages>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleButtonClick = (field: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationResult = FormSchema.safeParse(formData);

    if (validationResult.success) {
      setErrors({});
    } else {
      const formattedErrors = validationResult.error.flatten();

      setErrors(formattedErrors.fieldErrors);
      // todo: submit form data to API or handle it accordingly
    }
  };

  return (
    <div>
      <h1 className={title()}>CONTACT US</h1>
      <p className={subtitle()}>
        Want to discuss a Project or just chat? Please drop a line.
      </p>

      <p className="mt-20">
        <span className="text-danger-500">*</span>All fields are required
      </p>
      <form
        className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 mt-4 mb-5 md:mb-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <Input
            errorMessage={errors.subject ? errors.subject[0] : undefined}
            isClearable={true}
            isInvalid={!!errors.subject}
            isRequired={true}
            label="Subject"
            name="subject"
            size="lg"
            type="text"
            value={formData.subject}
            variant="underlined"
            onChange={handleChange}
          />
          <Input
            errorMessage={errors.name ? errors.name[0] : undefined}
            isClearable={true}
            isInvalid={!!errors.name}
            isRequired={true}
            label="Name"
            name="name"
            size="lg"
            type="text"
            value={formData.name}
            variant="underlined"
            onChange={handleChange}
          />
          <Input
            errorMessage={errors.email ? errors.email[0] : undefined}
            isClearable={true}
            isInvalid={!!errors.email}
            isRequired={true}
            label="Email"
            name="email"
            size="lg"
            type="email"
            value={formData.email}
            variant="underlined"
            onChange={handleChange}
          />
          <Input
            errorMessage={
              errors.phoneNumber ? errors.phoneNumber[0] : undefined
            }
            isClearable={true}
            isInvalid={!!errors.phoneNumber}
            isRequired={true}
            label="Phone Number"
            name="phoneNumber"
            size="lg"
            type="text"
            value={formData.phoneNumber}
            variant="underlined"
            onChange={handleChange}
          />
          <Input
            errorMessage={
              errors.companyName ? errors.companyName[0] : undefined
            }
            isClearable={true}
            isInvalid={!!errors.companyName}
            isRequired={true}
            label="Company / project name"
            name="companyName"
            size="lg"
            type="text"
            value={formData.companyName}
            variant="underlined"
            onChange={handleChange}
          />
          <Textarea
            errorMessage={
              errors.projectDescription
                ? errors.projectDescription[0]
                : undefined
            }
            isInvalid={!!errors.projectDescription}
            isRequired={true}
            label="Project Description"
            name="projectDescription"
            placeholder="Describe your project here.."
            size="lg"
            value={formData.projectDescription}
            variant="underlined"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col justify-between w-full md:w-1/2 gap-8">
          <div>
            <div className="border-b-2 border-white/20">
              <label htmlFor="project-budget">
                <span className={errors.projectBudget ? "text-danger-300" : ""}>
                  Project Budget (IDR)
                </span>
                <span className="text-danger-500">*</span>
              </label>
              <div className="flex flex-wrap justify-start gap-4 my-7">
                <Button
                  className={
                    formData.projectBudget === "< 100 mio"
                      ? "hover:text-black hover:bg-white bg-white text-black transition duration-200"
                      : "hover:text-black hover:bg-white transition duration-200"
                  }
                  size="lg"
                  variant="bordered"
                  onPress={() =>
                    handleButtonClick("projectBudget", "< 100 mio")
                  }
                >
                  {"< 100 mio"}
                </Button>
                <Button
                  className={
                    formData.projectBudget === "100 - 300 mio"
                      ? "hover:text-black hover:bg-white bg-white text-black transition duration-200"
                      : "hover:text-black hover:bg-white transition duration-200"
                  }
                  size="lg"
                  variant="bordered"
                  onPress={() =>
                    handleButtonClick("projectBudget", "100 - 300 mio")
                  }
                >
                  {"100 - 300 mio"}
                </Button>
                <Button
                  className={
                    formData.projectBudget === "300 - 600 mio"
                      ? "hover:text-black hover:bg-white bg-white text-black transition duration-200"
                      : "hover:text-black hover:bg-white transition duration-200"
                  }
                  size="lg"
                  variant="bordered"
                  onPress={() =>
                    handleButtonClick("projectBudget", "300 - 600 mio")
                  }
                >
                  {"300 - 600 mio"}
                </Button>
                <Button
                  className={
                    formData.projectBudget === "> 600 mio"
                      ? "hover:text-black hover:bg-white bg-white text-black transition duration-200"
                      : "hover:text-black hover:bg-white transition duration-200"
                  }
                  size="lg"
                  variant="bordered"
                  onPress={() =>
                    handleButtonClick("projectBudget", "> 600 mio")
                  }
                >
                  {"> 600 mio"}
                </Button>
              </div>
            </div>
            <span className="text-danger-300 text-sm">
              {errors.projectBudget && errors.projectBudget[0]}
            </span>
          </div>
          <div>
            <div className="border-b-2 border-white/20">
              <label htmlFor="delivery-date">
                <span
                  className={errors.projectDeadline ? "text-danger-300" : ""}
                >
                  Project Delivery Date
                </span>
                <span className="text-danger-500">*</span>
              </label>
              <div className="flex flex-wrap justify-start gap-4 my-7">
                <Button
                  className={
                    formData.projectDeadline === "< 3 months"
                      ? "hover:text-black hover:bg-white bg-white text-black transition duration-200"
                      : "hover:text-black hover:bg-white transition duration-200"
                  }
                  size="lg"
                  variant="bordered"
                  onPress={() =>
                    handleButtonClick("projectDeadline", "< 3 months")
                  }
                >
                  {"< 3 months"}
                </Button>
                <Button
                  className={
                    formData.projectDeadline === "3 - 12 months"
                      ? "hover:text-black hover:bg-white bg-white text-black transition duration-200"
                      : "hover:text-black hover:bg-white transition duration-200"
                  }
                  size="lg"
                  variant="bordered"
                  onPress={() =>
                    handleButtonClick("projectDeadline", "3 - 12 months")
                  }
                >
                  {"3 - 12 months"}
                </Button>
                <Button
                  className={
                    formData.projectDeadline === "> 1 year"
                      ? "hover:text-black hover:bg-white bg-white text-black transition duration-200"
                      : "hover:text-black hover:bg-white transition duration-200"
                  }
                  size="lg"
                  variant="bordered"
                  onPress={() =>
                    handleButtonClick("projectDeadline", "> 1 year")
                  }
                >
                  {"> 1 year"}
                </Button>
              </div>
            </div>
            <span className="text-danger-300 text-sm">
              {errors.projectDeadline && errors.projectDeadline[0]}
            </span>
          </div>
          <button
            className="border-2 border-white/50 py-3 rounded-2xl bg-transparent hover:text-black hover:bg-white transition duration-200"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
      <div className="flex flex-col w-full my-20">
        <div className="flex flex-wrap flex-row gap-10 mb-8">
          <div>
            <h1>Email</h1>
            <p className="font-black text-2xl">contact@apaya.com</p>
          </div>
          <div>
            <h1>Phone Number</h1>
            <p className="font-black text-2xl">(+62) 891291991311</p>
          </div>
        </div>
        <address className="not-italic">
          Jl. Kembang Turi No. 17 Kota Malang, Indonesia
        </address>
      </div>
    </div>
  );
}
