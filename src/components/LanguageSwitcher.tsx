import React from "react";
import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover } from "@/components/ui/popover";
import { supportedLanguages, changeLanguage, type SupportedLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as SupportedLanguage;

  const handleLanguageChange = async (lang: SupportedLanguage) => {
    await changeLanguage(lang);
  };

  return (
    <Popover
      trigger={
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 h-8 px-2"
          title="Language"
        >
          <Globe className="h-4 w-4" />
          <span className="text-xs">
            {supportedLanguages.find(l => l.code === currentLang)?.nativeName || 'English'}
          </span>
        </Button>
      }
      content={
        <div className="space-y-1">
          {supportedLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                currentLang === lang.code && "bg-accent/50"
              )}
            >
              <span>{lang.nativeName}</span>
              {currentLang === lang.code && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </button>
          ))}
        </div>
      }
      side="bottom"
      align="end"
    />
  );
};
