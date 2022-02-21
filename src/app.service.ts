import { Injectable } from '@nestjs/common';
import { FolderNamesDto } from './dto/folderName.dto';
import { GeneratedFolderDto } from './dto/generatedFolder.dto';

@Injectable()
export class AppService {
  
 generateNewFolderName(existingFolders : FolderNamesDto) : {generatedFolder : GeneratedFolderDto} {
 
    var newFolderName = '';
    if(!existingFolders.folderNames.includes('New Folder', 0)) {
      newFolderName = 'New Folder';
    } else if (existingFolders.folderNames.includes('New Folder') && !existingFolders.folderNames.includes('New Folder (2)')) {
      newFolderName = 'New Folder (2)';
    } else if (existingFolders.folderNames.includes('New Folder') && existingFolders.folderNames.includes('New Folder (2)')){
      
      var lastIndex = existingFolders.folderNames.pop().match(/\((.*)\)/).at(1);
      var parsedLastValue = parseInt(lastIndex);

      newFolderName = `New Folder (${parsedLastValue+1})`;
    }
    return {generatedFolder : {name : newFolderName}};
  }
}
