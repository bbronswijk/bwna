import { Button } from "@repo/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";
import { Badge } from "@repo/ui/badge";
import { Combobox } from "@repo/ui/combobox";
import { Separator } from "@repo/ui/separator";
import { Checkbox } from "@repo/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@repo/ui/radio-group";
import { Label } from "@repo/ui/label";

const items = [
  "Wegenwacht",
  "Verzekeringen",
  "Energie",
  "Verkeer",
  "Auto",
  "Fiets",
  "Eropuit",
  "Vakantie",
  "Webwinkel",
  "Lidmaatschap",
];

const tags = [
  "Verkeersinformatie NL",
  "Tankstations & prijzen",
  "Hotels & Campings",
  "Parkeren",
  "Oplaadpunten",
];

export default function Page(): JSX.Element {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 mb-20">
        <nav className="flex gap-6 text-lg font-medium max-w-[1800px] mx-auto">
          <Image
            src="/logo.png"
            className="mr-12 h-8 object-contain"
            alt="logo"
            width={155}
            height={43}
          />
          {items.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>
      <main className="w-full max-w-[1200px] mx-auto">
        <section className="grid grid-cols-3 gap-8">
          <Card className="col-span-2 h-96">
            <form>
              <CardHeader>
                <CardTitle>Plan je route</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Combobox />
                <Combobox />
                <Separator />
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Brandstof auto</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">
                      Elektrische auto <Badge>Beta</Badge>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Checkbox id="terms" checked />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Route houdt rekening met actueel verkeer
                </label>
                <Button className="ml-auto">Plan route</Button>
              </CardFooter>
            </form>
          </Card>

          <aside className="">
            <Card className="overflow-hidden">
              <CardContent className="bg-white/5 h-48" />
              <CardHeader>
                <CardTitle>Bekijk op de kaart</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2 items-start">
                {tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </CardContent>
            </Card>
          </aside>
        </section>
      </main>
    </div>
  );
}
