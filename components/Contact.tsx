'use client';
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { formSchema } from '@/lib/validation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import Image from 'next/image';


const Contact = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
});

const onSubmit = async (values: z.infer<typeof formSchema>)=> {
    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    
      if (res.ok) {
        toast.success("Message envoyé avec succès !");
        form.reset();
      } else {
        toast.error("Échec de l’envoi du message.");
        console.log(res);
      }
};
  return (
    <>
    <section id='contact' className='w-full px-5 md:px-14 mt-10 flex justify-center items-center flex-col'>
    <div className="text-[70px] font-special font-extrabold text-light/15">CONTACT</div>
    <div className="text-vert font-special font-extrabold md:font-bold text-3xl propos"  style={{marginTop: '-40px'}}>CONTACT</div>


    <div className="my-10 background w-full mx-6  md:w-[85%] md:mx-auto border-vert border-2  rounded-md">
        <div className="flex mx-5 flex-wrap justify-center mt-14 font-special font-bold text-xl md:text-2xl text-center text-light-primary">Besoin d'un projet ? Contactez-moi dès maintenant</div>
            <div className="flex w-full mt-5 justify-center">
            <Image src='/Image/avatar.png' alt="photo" width={100} height={100}/>
            </div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:px-8 px-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mt-10">
              <FormLabel className='text-light-primary'>Name or Username</FormLabel>
              <FormControl>
                <Input placeholder='Votre nom ou votre username' {...field} className='text-white focus:!outline-none   focus:!ring-2 focus:!ring-vert ' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-light-primary'>Email</FormLabel>
              <FormControl>
                <Input placeholder="votre email" {...field} className='text-white focus:!outline-none   focus:!ring-2 focus:!ring-vert' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-light-primary'>Contact</FormLabel>
              <FormControl>
                <Input placeholder="votre contact" {...field} className='text-white focus:!outline-none   focus:!ring-2 focus:!ring-vert' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="project"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-light-primary'>Projet</FormLabel>
              <FormControl>
                <Textarea placeholder="Decrivez un peu plus votre projet" {...field} className='text-white min-h-[100px] focus:!outline-none   focus:!ring-2 focus:!ring-vert' rows={6}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-5 justify-center">
        <Button type="submit" className='mb-10 button bg-white text-black'>Submit</Button>
        <Button type="reset" className='mb-10 download bg-black text-white'>Annuler</Button>
        </div>
      </form>
    </Form>

    </div>

    <div className=" flex flex-wrap px-4 justify-center items-center mt-10 background py-5 w-full text-light-primary border-t-2 border-light-primary">
    <p className="text-center text-sm">Designé et développé par ADAM. <strong className='mx-1'>Copyright</strong><strong className='text-vert'> 2024 - Tous droits réservés</strong></p>
    </div>
    </section>
    </>
  )
};

export default Contact;
