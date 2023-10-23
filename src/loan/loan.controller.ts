import { Body, Controller, Post , Param} from '@nestjs/common';
import { LoanService } from './loan.service';
import { CreateLoanDto } from '../dto/create-loan.dto';
import { ApiTags, ApiOperation, ApiBody , ApiParam } from '@nestjs/swagger';

@ApiTags('Loan')
@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post(':bookID/:readerID')
  @ApiOperation({ summary: 'Create a new loan' })
  @ApiBody({ description: 'Optional loan date', type: CreateLoanDto, required: false })
  @ApiParam({ name: 'bookID', type: 'number', description: 'Book ID' })
  @ApiParam({ name: 'readerID', type: 'number', description: 'Reader ID' })
  async createLoan(@Param('bookID') bookID: number, @Param('readerID') readerID: number, @Body() createLoanDto: CreateLoanDto) {
    const { date } = createLoanDto;
    return this.loanService.createLoan(bookID, readerID , date);
  }
}
