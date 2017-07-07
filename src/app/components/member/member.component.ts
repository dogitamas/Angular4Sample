import { Component } from '@angular/core';

import { MemberService } from '../../services/member.service';

@Component({
  selector: 'members-root',
  providers: [MemberService],
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})

export class MemberComponent {
  constructor(private memberService: MemberService) { }
}
