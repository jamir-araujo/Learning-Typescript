interface IFileService {
    writeFile(filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void): void;
    readFile(filename: string, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
}