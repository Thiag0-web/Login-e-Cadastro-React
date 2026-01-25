import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import GoogleIcon from "@/assets/icons/google.svg";
import AppleBlackIcon from "@/assets/icons/appleBlack.svg";
import AppleWhiteIcon from "@/assets/icons/appleWhite.svg";

export function SignupPage() {
  const [toggleVisibility, setToggleVisibility] = useState(false);
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">
            Criar uma conta
          </h1>
          <p>
            Já tem uma conta?{" "}
            <Link to="/" className="text-indigo-400 hover:underline">
              Conecte-se
            </Link>{" "}
          </p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Nome" className="" />
            <Input placeholder="Sobrenome" />
          </div>

          <Input type="email" placeholder="E-mail" />

          <InputGroup className="bg-primary">
            <InputGroupInput
              type={toggleVisibility ? "text" : "password"}
              placeholder="Senha"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                onClick={() => setToggleVisibility((prev) => !prev)}
                className="hover:bg-transparent text-gray-500 hover:text-white"
              >
                {toggleVisibility ? (
                  <EyeOff className="size-05" />
                ) : (
                  <Eye className="size-5" />
                )}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>

          <div className="flex items-center gap-2 py-2">
            <Checkbox
              id="terms"
              className="border-gray-600 data-[state=checked]:bg-chart-3 data-[state=checked]:border-gray-600"
            />
            <label htmlFor="terms">
              Concordo com os{" "}
              <a href="#" className="underline text-secondary">
                Termos e Condições
              </a>
            </label>
          </div>
        </form>
        <Button className="w-full h-12 bg-secondary text-primary hover:text-white border hover:border-white active:bg-chart-2">
          Criar conta
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="bg-white" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-primary px-2 text-secondary">
              Ou registre-se com
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="bg-transparent border-secondary hover:bg-secondary h-12
            /5 hover:text-primary active:bg-chart-2"
          >
            <img className="size-5" src={GoogleIcon} alt="Google Icon"></img>
            Google
          </Button>
          <Button
            variant="outline"
            className="group bg-transparent border-secondary hover:bg-secondary hover:text-primary active:bg-chart-2 h-12 flex items-center gap-2"
          >
            <img
              className="size-5 block group-hover:hidden"
              src={AppleWhiteIcon}
              
            />
            <img
              className="size-5 hidden group-hover:block"
              src={AppleBlackIcon}
            />
            Apple
          </Button>
        </div>
      </div>
    </div>
  );
}
