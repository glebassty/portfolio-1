// page.tsx

import { Button } from "@/components/ui/Button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <div>
      <Button icon={PlusIcon}>Hire me</Button>
    </div>
  );
}
