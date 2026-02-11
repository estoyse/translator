import { useTranslationStore } from "@/store/translationStore";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function TranslationsTable() {
  const translations = useTranslationStore(state => state.translations);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent translations</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Original</TableHead>
              <TableHead>Translated</TableHead>
              <TableHead className='text-right'>Lang</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {translations.map(translation => (
              <TableRow key={translation.id}>
                <TableCell>{translation.original}</TableCell>
                <TableCell>{translation.translation}</TableCell>
                <TableCell className='text-right'>En -&gt; Uz</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
