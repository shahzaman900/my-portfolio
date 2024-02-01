// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm, ValidationError } from '@formspree/react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
function ContactForm() {
  const [state, handleSubmit] = useForm("mknalvyr");
  if (state.succeeded) {
    return <p>Thanks for Contacting me i will beck to you in 24 hours!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-8 border rounded-md '>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="text">Full Name</Label>
        <Input type="text" id="text" placeholder="Enter Name" />
        <ValidationError prefix="text" field="text" errors={state.errors} />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="Email" />
        <ValidationError prefix="email" field="email" errors={state.errors} />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Type your message here." id="message" />
        <ValidationError prefix="message" field="message" errors={state.errors} />
      </div>
      <Button type="submit" disabled={state.submitting}> Submit </Button>
    </form>
  );
}

export default ContactForm;