import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface GuideButtonProps {
  onClick: () => void;
}

const GuideButton = ({ onClick }: GuideButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClick}
          className="h-9 w-9"
          aria-label="Start website tour"
        >
          <HelpCircle className="h-5 w-5" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Take a guided tour</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default GuideButton;
