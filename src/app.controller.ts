import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FolderNamesDto } from './dto/folderName.dto';
import { GeneratedFolderDto } from './dto/generatedFolder.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createFolder(@Body() existingFolders : FolderNamesDto) : {generatedFolder : GeneratedFolderDto} {
    return this.appService.generateNewFolderName(existingFolders);    
  }
}
