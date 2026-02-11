import { Mic2Icon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useTranslationStore } from "@/store/translationStore";

export default function TranslationForm() {
  const { startRecording, stopRecording, isRecording } = useSpeechRecognition();
  const currentTranslation = useTranslationStore(
    state => state.currentTranslation
  );
  return (
    <Card>
      <CardHeader>
        <CardTitle>Translate</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex gap-2 w-full'>
          <div className='w-full'>
            <label>From</label>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='light'>Uz</SelectItem>
                  <SelectItem value='dark'>En</SelectItem>
                  <SelectItem value='system'>Ru</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='w-full'>
            <label>To</label>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='light'>Uz</SelectItem>
                  <SelectItem value='dark'>En</SelectItem>
                  <SelectItem value='system'>Ru</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='flex gap-2 w-fullstartRecording'>
          <div className='w-full space-y-2'>
            <div className='flex justify-between'>
              <label>Input</label>
              <Button
                variant={!isRecording ? "outline" : "default"}
                onClick={!isRecording ? startRecording : stopRecording}
              >
                <Mic2Icon />
                Voice Input
              </Button>
            </div>
            <Textarea value={currentTranslation?.original} disabled />
          </div>
          <div className='w-full'>
            <label>Output</label>
            <Textarea value={currentTranslation?.translation} disabled />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
