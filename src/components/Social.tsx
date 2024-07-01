import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function Social() {
  return (
    <div className="flex justify-center space-x-4">
      <a href="https://github.com/litisrael" target="_blank" rel="noopener noreferrer">
        <GitHubLogoIcon className="h-6 w-6" />
      </a>
      <a href="https://www.linkedin.com/in/israel-litvack-59203141" target="_blank" rel="noopener noreferrer">
        <LinkedInLogoIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
