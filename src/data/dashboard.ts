import StudentIcon from "../assets/dashboard/member-icon.svg";
import CertificateTotalIcon from "../assets/dashboard/box-icon.svg";
import CertificateScoreIcon from "../assets/dashboard/upper-icon.svg";

export type dashboard = {
  id: number;
  type: string;
  total: number;
  percentage: string;
  icon: string;
};

export const DashboardType: dashboard[] = [
  {
    id: 1,
    type: "Total Students",
    total: 513,
    percentage: "8.5%",
    icon: StudentIcon,
  },
  {
    id: 2,
    type: "Total Certified Students",
    total: 489,
    percentage: "8.5%",
    icon: CertificateTotalIcon,
  },
  {
    id: 3,
    type: "Average Certification Score",
    total: 84.62,
    percentage: "8.5%",
    icon: CertificateScoreIcon,
  },
];
