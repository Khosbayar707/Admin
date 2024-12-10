import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bodoni_Moda } from "next/font/google";
import { useEffect, useState } from "react";

export const UserCreateDialog = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");

  async function submit() {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        firstname: name,
        lastname: lastname,
        email: mail,
      }),
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create user</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              onChange={(e) => {
                setName(e.target.value);
                console.log(name);
              }}
              id="name"
              defaultValue={name}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastname">Lastname</Label>
            <Input
              onChange={(e) => {
                setLastname(e.target.value);
                console.log(lastname);
              }}
              id="username"
              defaultValue={lastname}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">E-mail</Label>
            <Input
              type="email"
              onChange={(e) => {
                setMail(e.target.value);
                console.log(mail);
              }}
              id="email"
              defaultValue={mail}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => onClose(false)}
            variant="outline"
            type="button"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              submit();
              onClose(false);
            }}
            type="submit"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
