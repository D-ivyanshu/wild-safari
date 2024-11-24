import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle, FiX } from "react-icons/fi";
import { useState } from "react";
import Images from "../assets/images";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name must be not be empty.",
  }),
  phno: z
    .string()
    .min(1, {
      message: "Phone number must not be empty.",
    })
    .regex(/^\d+$/, { message: "Phone number must contain only digits." })
    .length(10, { message: "Phone number must be 10 digits long." }),
  date: z
    .date()
    .refine((val) => val.getTime() >= new Date().setHours(0, 0, 0, 0), {
      message: "Date must be today or later.",
    }),
  requirements: z.string().min(1, {
    message: "Requirements must be not be empty.",
  }),
});

const ModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-[#FF9413] to-[#DF6951] text-white font-medium px-5 w-36 h-10 rounded-2xl py-2 hover:opacity-90 transition-opacity text-lg flex items-center justify-center"
      >
        Book now
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

interface SpringModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const SpringModal = ({ isOpen, setIsOpen }: SpringModalProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phno: "",
      date: undefined,
      requirements: "",
    },
  });

  function closeModal() {
    form.reset();
    form.clearErrors();
    setIsOpen(false);
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    closeModal();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-5 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className=" text-white rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            style={{
              backgroundImage: `url(${Images.ModalBg})`, // Background image applied here
              backgroundSize: "cover", // Ensure the image covers the whole div
              backgroundPosition: "center", // Center the image within the div
            }}
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div
              onClick={() => closeModal()}
              className="absolute top-4 right-5 w-4 h-4 z-50 bg-black"
            >
              <FiX size={20} />
            </div>
            <div className="relative z-10 px-5 py-12">
              <div className="mb-2 text-3xl text-indigo-600 grid place-items-center mx-auto">
                <img src={Images.ClawIcon} alt="" className="w-10 h-25" />
              </div>
              <h3 className="text-3xl font-bold text-center">
                Ready for a Safari? <br />
              </h3>
              <h3 className="text-2xl font-semibold text-center text-white mb-3">
                Enquire Now
              </h3>
              <div>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 px-3 py-3"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          {/* <FormMessage /> */}
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phno"
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                          <FormLabel>Ph no.</FormLabel>
                          <FormControl>
                            <Input {...field} type="mobile" />
                          </FormControl>
                          {/* <FormMessage /> */}
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                          <FormLabel>Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 bg-transparent text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span> </span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          {/* <FormMessage /> */}
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="requirements"
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                          <FormLabel>Requirements</FormLabel>
                          <FormControl>
                            <Textarea className="resize-none" {...field} />
                          </FormControl>
                          {/* <FormMessage /> */}
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      className="bg-slate-50 text-[#DF6951] font-semibold py-3 px-5 rounded"
                    >
                      Submit!
                    </button>
                  </form>
                </Form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalWrapper;
