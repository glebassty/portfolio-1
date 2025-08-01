import { cn } from "@/lib/utils";
import { CircleIcon } from "@radix-ui/react-icons";
import { CardTitle } from "../CardTitle/CardTitle";

type WorkSectionProps = {
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;

// TODO прокидывать все данные через сторибук
const JOBS = [
  {
    id: 1,
    position: "Software Engineer",
    years: "2022-2023",
    company: "Tech Corp",
  },
  {
    id: 2,
    position: "Frontend Developer",
    years: "2023-2024",
    company: "Web Solutions",
  },
  {
    id: 3,
    position: "Backend Developer",
    years: "2024-2025",
    company: "Data Systems",
  },
];

export const WorkSection = ({
  title,
  className,
  ...props
}: WorkSectionProps) => {
  return (
    <div
      className={cn(
        "bg-bg-primary border-border-primary rounded-2xl border-2 px-5 py-5.5 sm:px-10 sm:py-15",
        className,
      )}
      {...props}
    >
      <div className="mb-9.5 flex items-center gap-1.5 sm:mb-17.5 sm:gap-2.5">
        <CircleIcon className="text-text-secondary" />
        <h3 className="text-text-secondary text-base sm:text-2xl">{title}</h3>
      </div>
      <div className="flex flex-col gap-5 sm:gap-9.5">
        {JOBS.map((job) => (
          <CardTitle key={job.id} title={job.position} description={job.years}>
            {job.company}
          </CardTitle>
        ))}
      </div>
    </div>
  );
};
