import React from "react";
import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const inputStyle = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mt-5`;

const ContactUs = ({ setSelectedPage }: Props) => {
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            {" "}
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>

          {/* FORM AND IMAGE */}
          <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
              className="mt-10 basis-3/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/rurzh2004@email.com"
                method="POST"
              >
                <input
                  type="text"
                  className={inputStyle}
                  placeholder="NAME"
                  {...register("name", {
                    required: true,
                    min: 30,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "maxLength" && "Max length 100 char."}
                  </p>
                )}
                {/* email */}
                <input
                  type="email"
                  className={inputStyle}
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "pattern" && "Invalid email address."}
                  </p>
                )}
                {/* message */}
                <textarea
                  rows={4}
                  cols={50}
                  className={inputStyle}
                  placeholder="MESSAGE"
                  {...register("message", {
                    required: true,
                    maxLength: 200,
                  })}
                ></textarea>
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "maxLength" && "Max length 200 char."}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                >
                  SUMBIT
                </button>
              </form>
            </motion.div>

            <motion.div
              className=" relative mt-16 basis-2/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="w-full before:absolute before:-bottom-20  before:-right-10 before:z-[-1] md:before:content-evolvetext">
                <img
                  src={ContactUsPageGraphic}
                  alt="contact-us-page-graphic"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;