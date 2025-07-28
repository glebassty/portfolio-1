// page.tsx

import { Button } from "@/components/ui/Button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <div>
      <Button icon={<PlusIcon className="h-5 w-5 text-white" />}>
        Hire me
      </Button>
    </div>
  );
}
