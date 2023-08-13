import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(private cpu: CpuService, private disk: DiskService) {}
  @Get()
  getData() {
    return this.disk.getData();
  }
  @Get('/computing')
  computing() {
    return this.cpu.compute(2, 2);
  }
}
